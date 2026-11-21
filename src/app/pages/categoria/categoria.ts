import { Component, computed, inject, input, signal } from '@angular/core';
import { Producto, PRODUCTOS } from '../../data/productos';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Compras } from '../../services/compras';

@Component({
  imports: [RouterLink],
  selector: 'app-categoria',
  styleUrl: './categoria.scss',
  templateUrl: './categoria.html',
})
export class Categoria {
  protected auth = inject(Auth);
  private compras = inject(Compras);
  private router = inject(Router);

  id = input<string>();
  productos = computed(() => PRODUCTOS.filter((p) => p.categoria === this.id()));
  agregado = signal('');

  productoAgotado(id: string) {
    return this.compras.stockDisponible(id) === 0;
  }

  agregarProducto(produ: Producto) {
    if (!this.auth.sesion()) {
      this.router.navigate(['/login']);
      return;
    }
    if (this.productoAgotado(produ.id)) return;
    this.compras.agregarProducto(produ);
    this.agregado.set(produ.id);
    setTimeout(() => this.agregado.set(''), 1000);
  }
}

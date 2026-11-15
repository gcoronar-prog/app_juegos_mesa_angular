import { Component, computed, inject, input, signal } from '@angular/core';
import { PRODUCTOS } from '../../data/productos';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Compras } from '../../services/compras';

@Component({
  imports: [RouterLink],
  selector: 'app-producto',
  styleUrl: './producto.scss',
  templateUrl: './producto.html',
})
export class Producto {
  protected auth = inject(Auth);
  private compras = inject(Compras);
  private router = inject(Router);

  id = input<string>();
  producto = computed(() => PRODUCTOS.find((p) => p.id === this.id()));
  agregado = signal(false);

  agregar() {
    if (!this.auth.sesion()) {
      this.router.navigate(['/login']);
      return;
    }
    this.compras.agregarProducto(this.producto()!);
    this.agregado.set(true);
  }
}

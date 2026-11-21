import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Compras, ItemCarrito } from '../../services/compras';

@Component({
  imports: [FormsModule],
  selector: 'app-carrito',
  styleUrl: './carrito.scss',
  templateUrl: './carrito.html',
})
export class Carrito {
  private compras = inject(Compras);

  carrito = this.compras.getCarrito();
  pagado = false;

  montoTotal() {
    return this.carrito.reduce((suma, i) => suma + i.precio * (i.cantidad || 0), 0);
  }

  stock(item: ItemCarrito) {
    return this.compras.stockDisponible(item.id);
  }

  faltaStock(item: ItemCarrito) {
    return item.cantidad > this.stock(item);
  }

  cambiarCantidad(item: ItemCarrito) {
    item.cantidad = Math.max(1, Math.floor(item.cantidad) || 1);
    this.compras.guardarCarrito(this.carrito);
  }

  eliminarProducto(item: ItemCarrito) {
    this.carrito = this.carrito.filter((i) => i !== item);
    this.compras.guardarCarrito(this.carrito);
  }

  faltantes() {
    return this.carrito.some((i) => this.faltaStock(i));
  }

  agregarCompra() {
    this.compras.realizarCompra(this.carrito, this.montoTotal());
    this.carrito = [];
    this.pagado = true;
  }
}

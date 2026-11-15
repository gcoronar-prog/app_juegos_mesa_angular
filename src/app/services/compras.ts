import { inject, Injectable } from '@angular/core';
import { Auth } from './auth';
import { Producto } from '../data/productos';

export interface ItemCarrito {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

export interface Compra {
  fecha: string;
  productos: ItemCarrito[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class Compras {
  private auth = inject(Auth);

  private claveUsuario(tipo: 'carrito' | 'historial') {
    return `${tipo}_${this.auth.sesion()?.usuario}`;
  }

  getCarrito(): ItemCarrito[] {
    return JSON.parse(localStorage.getItem(this.claveUsuario('carrito')) ?? '[]');
  }

  guardarCarrito(carrito: ItemCarrito[]) {
    localStorage.setItem(this.claveUsuario('carrito'), JSON.stringify(carrito));
  }

  agregarProducto(produ: Producto) {
    const carrito = this.getCarrito();
    const item = carrito.find((i) => i.id === produ.id);
    if (item) {
      item.cantidad++;
    } else {
      carrito.push({ id: produ.id, nombre: produ.nombre, precio: produ.precio, cantidad: 1 });
    }
    this.guardarCarrito(carrito);
  }

  realizarCompra(carrito: ItemCarrito[], total: number) {
    const historial = this.getHistorial();
    historial.push({ fecha: new Date().toLocaleDateString('es-CL'), productos: carrito, total });
    localStorage.setItem(this.claveUsuario('historial'), JSON.stringify(historial));
    this.guardarCarrito([]);
  }

  getHistorial() {
    return JSON.parse(localStorage.getItem(this.claveUsuario('historial')) ?? '[]');
  }
}

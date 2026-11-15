import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTOS } from '../../data/productos';

@Component({
  imports: [FormsModule],
  selector: 'app-bodega',
  styleUrl: './bodega.scss',
  templateUrl: './bodega.html',
})
export class Bodega {
  stockMinimo = 5;
  inventario = PRODUCTOS;
  guardado = false;

  constructor() {
    this.stockReemplazo();
  }

  stockReemplazo() {
    const stockGuardado: Record<string, number> = JSON.parse(localStorage.getItem('stock') ?? '{}');
    for (const pro of this.inventario) {
      pro.stock = stockGuardado[pro.id] ?? pro.stock;
    }
  }

  pocasUnidades() {
    return this.inventario.filter((p) => p.stock <= this.stockMinimo);
  }

  guardarStock() {
    const stock = Object.fromEntries(this.inventario.map((p) => [p.id, p.stock ?? 0]));
    localStorage.setItem('stock', JSON.stringify(stock));
    this.guardado = true;
  }
}

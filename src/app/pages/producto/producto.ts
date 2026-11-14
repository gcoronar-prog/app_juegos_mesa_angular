import { Component, computed, input } from '@angular/core';
import { PRODUCTOS } from '../../data/productos';

@Component({
  imports: [],
  selector: 'app-producto',
  styleUrl: './producto.scss',
  templateUrl: './producto.html',
})
export class Producto {
  id = input<string>();
  producto = computed(() => PRODUCTOS.find((p) => p.id === this.id()));
}

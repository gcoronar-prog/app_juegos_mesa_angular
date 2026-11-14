import { Component, computed, input } from '@angular/core';
import { PRODUCTOS } from '../../data/productos';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-categoria',
  styleUrl: './categoria.scss',
  templateUrl: './categoria.html',
})
export class Categoria {
  id = input<string>();
  productos = computed(() => PRODUCTOS.filter((p) => p.categoria === this.id()));
}

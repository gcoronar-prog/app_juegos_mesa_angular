import { Component, inject } from '@angular/core';
import { Compras } from '../../services/compras';

@Component({
  imports: [],
  selector: 'app-historial',
  styleUrl: './historial.scss',
  templateUrl: './historial.html',
})
export class Historial {
  historial = inject(Compras).getHistorial().reverse();
}

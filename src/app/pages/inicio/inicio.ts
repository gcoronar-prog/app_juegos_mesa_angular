import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-inicio',
  styleUrl: './inicio.scss',
  templateUrl: './inicio.html',
})
export class Inicio {
  categorias = [
    { id: 'tcg', nombre: 'Juegos de cartas', imagen: 'img/tcg.jpg' },
    { id: 'rol', nombre: 'Juegos de rol', imagen: 'img/rol.jpg' },
    { id: 'wargames', nombre: 'Wargames y estrategia', imagen: 'img/wargames.jpg' },
    { id: 'accesorios', nombre: 'Accesorios', imagen: 'img/accesorios.jpg' },
  ];
}

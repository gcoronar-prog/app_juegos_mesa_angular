import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-recuperar',
  styleUrl: './recuperar.scss',
  templateUrl: './recuperar.html',
})
export class Recuperar {
  private auth = inject(Auth);

  correo = '';
  mensaje = '';
  existe = false;

  recuperarPass() {
    const buscar = this.correo.trim().toLowerCase();
    this.existe = this.auth.usuarios.some((u) => u.correo === buscar);

    this.mensaje = this.existe
      ? `Se envio un enlace para recuperar su contraseña a ${buscar}`
      : 'No hay cuenta registrada con ese correo';
  }
}

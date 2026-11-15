import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

function limpiarForm() {
  return {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    usuario: '',
    correo: '',
    password: '',
    repetir: '',
    direccion: '',
  };
}

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.scss',
  templateUrl: './registro.html',
})
export class Registro {
  private auth = inject(Auth);

  datos = limpiarForm();
  mensaje = '';

  registrar() {
    this.auth.registrar({
      usuario: this.datos.usuario.trim(),
      correo: this.datos.correo.trim().toLowerCase(),
      password: this.datos.password,
      nombre: this.datos.nombre.trim(),
      apellido: this.datos.apellido.trim(),
      fechaNacimiento: this.datos.fechaNacimiento,
      direccion: this.datos.direccion,
      rol: 'cliente',
    });
    this.mensaje = `El usuario ${this.datos.usuario} ha sido registrado`;
    this.datos = limpiarForm();
  }
}

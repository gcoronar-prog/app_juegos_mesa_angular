import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-perfil',
  styleUrl: './perfil.scss',
  templateUrl: './perfil.html',
})
export class Perfil {
  private auth = inject(Auth);
  private router = inject(Router);

  actual = this.auth.usuarios.find((u) => u.usuario === this.auth.sesion()?.usuario);
  datos = { ...this.actual, repetir: this.actual?.password };
  editar = false;
  mensaje = '';

  constructor() {
    if (!this.actual) this.router.navigate(['/login']);
  }

  modificarDatos() {
    this.editar = true;
    this.mensaje = '';
  }

  guardarDatos() {
    Object.assign(this.actual!, {
      nombre: this.datos.nombre?.trim(),
      apellido: this.datos.apellido?.trim(),
      fechaNacimiento: this.datos.fechaNacimiento,
      correo: this.datos.correo?.trim().toLowerCase(),
      password: this.datos.password,
      direccion: this.datos.direccion?.trim(),
    });
    this.auth.guardarUsuario();
    this.editar = false;
    this.mensaje = 'Datos guardados correctamente';
  }
}

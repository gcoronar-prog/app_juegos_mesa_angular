import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-recuperar',
  styleUrl: './recuperar.scss',
  templateUrl: './recuperar.html',
})
export class Recuperar {
  private auth = inject(Auth);
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
  });

  c = this.form.controls;
  mensaje = '';
  existe = false;

  recuperarPass() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const buscar = this.c.correo.value.trim().toLowerCase();
    this.existe = this.auth.usuarios.some((u) => u.correo === buscar);

    this.mensaje = this.existe
      ? `Se envio un enlace para recuperar su contraseña a ${buscar}`
      : 'No hay cuenta registrada con ese correo';
  }
}

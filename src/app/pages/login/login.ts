import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  c = this.form.controls;
  error = '';

  mostrarError(campo: string) {
    const control = this.form.get(campo);
    return control?.invalid && control.touched;
  }

  ingresar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      const { correo, password } = this.form.getRawValue();
      if (this.auth.login(correo, password)) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    }
  }
}

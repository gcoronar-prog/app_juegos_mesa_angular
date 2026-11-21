import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Auth } from '../../services/auth';

function mayorDe13(control: AbstractControl): ValidationErrors | null {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const dia = String(hoy.getDate()).padStart(2, '0');
  const limite = `${hoy.getFullYear() - 13}-${mes}-${dia}`;
  return control.value && control.value > limite ? { menor13: true } : null;
}

function passwordIgual(form: AbstractControl): ValidationErrors | null {
  return form.get('password')?.value === form.get('repetir')?.value ? null : { diferentes: true };
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-registro',
  styleUrl: './registro.scss',
  templateUrl: './registro.html',
})
export class Registro {
  private auth = inject(Auth);
  private fb = inject(FormBuilder);

  mensaje = '';

  form = this.fb.nonNullable.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(/^\p{L}+([ '-]\p{L}+)*$/u)]],
      apellido: ['', [Validators.required, Validators.pattern(/^\p{L}+([ '-]\p{L}+)*$/u)]],
      fechaNacimiento: ['', [Validators.required, mayorDe13]],
      usuario: ['', [Validators.required, this.userRepetido('usuario')]],
      correo: ['', [Validators.required, Validators.email, this.userRepetido('correo')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          Validators.pattern(/^(?=.*\d)(?=.*\p{Lu}).+$/u),
        ],
      ],
      repetir: ['', Validators.required],
      direccion: [''],
    },
    { validators: passwordIgual },
  );

  c = this.form.controls;
  private userRepetido(campo: 'usuario' | 'correo') {
    return (control: AbstractControl): ValidationErrors | null => {
      const valor = String(control.value).trim().toLowerCase();
      return this.auth.usuarios.some((u) => u[campo].toLowerCase() === valor)
        ? { repetido: true }
        : null;
    };
  }

  mostrarError(campo: string) {
    const control = this.form.get(campo);
    return control?.invalid && control.touched;
  }

  registrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const d = this.form.getRawValue();
    this.auth.registrar({
      usuario: d.usuario.trim(),
      correo: d.correo.trim().toLowerCase(),
      password: d.password,
      nombre: d.nombre.trim(),
      apellido: d.apellido.trim(),
      fechaNacimiento: d.fechaNacimiento,
      direccion: d.direccion.trim(),
      rol: 'cliente',
    });
    this.mensaje = `El usuario ${d.usuario} ha sido registrado`;
    this.form.reset();
  }
}

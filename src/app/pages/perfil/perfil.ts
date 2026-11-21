import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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
  selector: 'app-perfil',
  styleUrl: './perfil.scss',
  templateUrl: './perfil.html',
})
export class Perfil {
  private auth = inject(Auth);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  actual = this.auth.usuarios.find((u) => u.usuario === this.auth.sesion()?.usuario);
  editar = false;
  mensaje = '';

  form = this.fb.nonNullable.group(
    {
      nombre: [
        this.actual?.nombre ?? '',
        [Validators.required, Validators.pattern(/^\p{L}+([ '-]\p{L}+)*$/u)],
      ],
      apellido: [
        this.actual?.apellido ?? '',
        [Validators.required, Validators.pattern(/^\p{L}+([ '-]\p{L}+)*$/u)],
      ],
      fechaNacimiento: [this.actual?.fechaNacimiento ?? '', [Validators.required, mayorDe13]],
      correo: [
        this.actual?.correo ?? '',
        [Validators.required, Validators.email, this.correoDeOtro.bind(this)],
      ],
      password: [
        this.actual?.password ?? '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          Validators.pattern(/^(?=.*\d)(?=.*\p{Lu}).+$/u),
        ],
      ],
      repetir: [this.actual?.password ?? '', Validators.required],
      direccion: [this.actual?.direccion ?? ''],
    },
    { validators: passwordIgual },
  );

  c = this.form.controls;

  constructor() {
    if (!this.actual) this.router.navigate(['/login']);
  }

  private correoDeOtro(control: AbstractControl): ValidationErrors | null {
    const valor = String(control.value).trim().toLowerCase();
    return this.auth.usuarios.some((u) => u !== this.actual && u.correo === valor)
      ? { repetido: true }
      : null;
  }

  mostrarError(campo: string) {
    const control = this.form.get(campo);
    return control?.invalid && control.touched;
  }

  modificarDatos() {
    this.editar = true;
    this.mensaje = '';
  }

  guardarDatos() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const d = this.form.getRawValue();
    Object.assign(this.actual!, {
      nombre: d.nombre.trim(),
      apellido: d.apellido.trim(),
      fechaNacimiento: d.fechaNacimiento,
      correo: d.correo.trim().toLowerCase(),
      password: d.password,
      direccion: d.direccion.trim(),
    });
    this.auth.guardarUsuario();
    this.editar = false;
    this.mensaje = 'Datos guardados correctamente';
  }
}

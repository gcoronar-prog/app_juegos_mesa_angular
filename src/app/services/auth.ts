import { Injectable, signal } from '@angular/core';

export interface Usuario {
  usuario: string;
  correo: string;
  password: string;
  rol: 'admin' | 'cliente';
  nombre?: string;
  apellido?: string;
  fechaNacimiento?: string;
  direccion?: string;
}

const USUARIOS: Usuario[] = [
  { usuario: 'admin', correo: 'admin@calabozos.cl', password: 'Admin123!', rol: 'admin' },
  { usuario: 'cliente', correo: 'cliente@calabozos.cl', password: 'Cliente123!', rol: 'cliente' },
];

@Injectable({ providedIn: 'root' })
export class Auth {
  usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') ?? 'null') ?? USUARIOS;
  sesion = signal<{ usuario: string; rol: string } | null>(
    JSON.parse(sessionStorage.getItem('sesion') ?? 'null'),
  );

  login(correo: string, password: string): boolean {
    const encontrado = this.usuarios.find(
      (u) => u.correo === correo.trim().toLowerCase() && u.password === password,
    );
    if (!encontrado) return false;
    const sesion = { usuario: encontrado.usuario, rol: encontrado.rol };
    sessionStorage.setItem('sesion', JSON.stringify(sesion));
    this.sesion.set(sesion);
    return true;
  }

  registrar(nuevo: Usuario) {
    this.usuarios.push(nuevo);
    this.guardarUsuario();
  }

  guardarUsuario() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  cerrarSesion() {
    sessionStorage.removeItem('sesion');
    this.sesion.set(null);
  }
}

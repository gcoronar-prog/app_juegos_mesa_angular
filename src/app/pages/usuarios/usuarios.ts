import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, Usuario } from '../../services/auth';

@Component({
  imports: [FormsModule],
  selector: 'app-usuarios',
  styleUrl: './usuarios.scss',
  templateUrl: './usuarios.html',
})
export class Usuarios {
  protected auth = inject(Auth);
  mensaje = '';

  userSelf(u: Usuario) {
    return u.usuario === this.auth.sesion()?.usuario;
  }

  cambioRol(u: Usuario) {
    this.auth.guardarUsuario();
    this.mensaje = `Ahora ${u.usuario} tiene el rol de ${u.rol === 'admin' ? 'Administrador' : 'Cliente'}`;
  }

  eliminarUsuario(u: Usuario) {
    if (!confirm(`¿Eliminar usuario ${u.usuario}?`)) return;
    this.auth.usuarios = this.auth.usuarios.filter((x) => x !== u);
    this.auth.guardarUsuario();
    this.mensaje = `Se eliminó al usuario ${u.usuario}`;
  }
}

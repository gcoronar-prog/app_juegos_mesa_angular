import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  datos = { correo: '', password: '' };
  error = '';

  ingresar() {
    if (this.auth.login(this.datos.correo, this.datos.password)) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}

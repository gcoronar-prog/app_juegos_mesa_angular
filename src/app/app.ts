import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected auth = inject(Auth);
  private router = inject(Router);

  salir() {
    this.auth.cerrarSesion();
    this.router.navigate(['/']);
  }
}

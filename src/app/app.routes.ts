import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Recuperar } from './pages/recuperar/recuperar';
import { Perfil } from './pages/perfil/perfil';
import { Categoria } from './pages/categoria/categoria';
import { Carrito } from './pages/carrito/carrito';
import { Historial } from './pages/historial/historial';
import { Bodega } from './pages/bodega/bodega';
import { Usuarios } from './pages/usuarios/usuarios';
import { Producto } from './pages/producto/producto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'recuperar', component: Recuperar },
  { path: 'perfil', component: Perfil },
  { path: 'categoria/:id', component: Categoria },
  { path: 'producto/:id', component: Producto },
  { path: 'carrito', component: Carrito },
  { path: 'historial', component: Historial },
  { path: 'bodega', component: Bodega },
  { path: 'usuarios', component: Usuarios },
  { path: '**', redirectTo: '' },
];

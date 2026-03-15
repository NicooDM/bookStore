import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    // Ruta: /auth/login
    // Como usamos exportación nombrada en login.ts, necesitamos el .then(m => m.Login)
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  {
    // Redirección si entran solo a /auth
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

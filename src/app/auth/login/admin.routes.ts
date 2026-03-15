import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    // Cargamos directamente la página de gestión de libros
    loadComponent: () => import('../../pages/manage-book/manage-book'),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

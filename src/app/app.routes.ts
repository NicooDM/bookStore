import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Feature de la Tienda y Páginas Públicas (Incluyendo Registro)
    path: 'book-store',
    loadChildren: () => import('./pages/book-store/store.routes').then((m) => m.STORE_ROUTES),
  },
  {
    // Feature de Autenticación (Login) - Generalmente páginas limpias sin Navbar
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    // Feature de Administración
    path: 'admin',
    loadChildren: () => import('./auth/login/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    // Redirección por defecto: Si entran a la raíz, vamos a la tienda
    path: '',
    redirectTo: 'book-store',
    pathMatch: 'full',
  },
  {
    // Error 404: Cualquier ruta no encontrada vuelve a la tienda
    path: '**',
    redirectTo: 'book-store',
  },
];

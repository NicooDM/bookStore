import { Routes } from "@angular/router";
import { StoreLayout } from "../../components/storeLayout/storeLayout";



export const STORE_ROUTES: Routes = [
  {
    path: '',
    component: StoreLayout, // Navbar y Footer fijos
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
      },
      {
        path: 'search',
        loadComponent: () => import('../search/search').then(m => m.Search)
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./details/details').then(m => m.Details)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./checkout/checkout').then(m => m.Checkout)
      },
      {
        path: 'cart',
        loadComponent: () => import('../../components/cartBook/cartBook').then(m => m.default)
      },
      {
        path: 'register',
        loadComponent: () => import('../register/register').then(m => m.Register)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

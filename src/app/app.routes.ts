import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent : () => import('./gifts/pages/dashboard-pages') // Ruta perezosa (lazy loading) del componente DashboardPages
  },

  {
    path:'**',
    redirectTo: 'dashboard'
    // Ruta comodín para redirigir a 'dashboard' si no se encuentra la ruta
  }
];

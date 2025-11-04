import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifts/pages/dashboard-pages/dashboard-pages'), // Ruta perezosa (lazy loading) del componente DashboardPages
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifts/pages/trending-pages/trending-pages'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifts/pages/search-pages/search-pages'), // Ruta perezosa (lazy loading) del componente SearchPages
      },
      {
        path: '**',
        redirectTo: 'trending',
        // Ruta comodín para redirigir a 'trending' si no se encuentra la ruta
      },
    ], // Rutas hijas bajo 'dashboard'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    // Ruta comodín para redirigir a 'dashboard' si no se encuentra la ruta
  },
];

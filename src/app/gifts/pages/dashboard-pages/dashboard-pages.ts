import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet], // Importar RouterOutlet para manejar rutas hijas , objeto de configuración del componente
  templateUrl: './dashboard-pages.html',
  styleUrl: './dashboard-pages.css',
})
export default class DashboardPages {
// Clase vacía para el componente DashboardPages exportado por defecto
}

// IGNORE , Para utilizar y crear un componente Angular con angular schematics
// ng generate component gifts/pages/dashboard-pages --standalone --skip-tests --flat --module=src/app/app.routes.ts

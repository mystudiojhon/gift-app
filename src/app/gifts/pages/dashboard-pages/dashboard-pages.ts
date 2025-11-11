import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, SideMenu], // Importar el componente GifsSideMenu
  templateUrl: './dashboard-pages.html',
  styleUrl: './dashboard-pages.css',
})
export default class DashboardPages {
// Clase vacía para el componente DashboardPages exportado por defecto y evitar la ruta larga
}

// IGNORE , Para utilizar y crear un componente Angular con angular schematics
// ng generate component gifts/pages/dashboard-pages --standalone --skip-tests --flat --module=src/app/app.routes.ts

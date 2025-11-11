import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOptionModel } from '../../../interfaces/menu-options.interface';

/**
 * Componente que maneja las opciones del menú lateral.
 * Utiliza signals para manejar el estado reactivo del menú.
 *
 * Características:
 * - Standalone component (no necesita declaración en módulo)
 * - Usa RouterLink para navegación
 * - Estado manejado con signals
 */
@Component({
  selector: 'side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Necesario para [routerLink] y [routerLinkActive]
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
  /**
   * Signal que contiene el array de opciones del menú.
   * Cuando esta signal se actualiza, Angular re-renderiza automáticamente
   * las partes del template que dependen de ella.
   *
   * Nota: Cada MenuOptionModel contiene sus propias signals internas
   * para icon, label, route y subLabel.
   */
  readonly menuOptions = signal([
    new MenuOptionModel({
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'gifts más populares'
    }),
    new MenuOptionModel({ icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Buscar gifts por categoría'
    }),
  ]);

  // /**
  //  * Añade una nueva opción al menú
  //  * @param option - Datos de la nueva opción
  //  */
  // addOption(option: Partial<MenuOption>) {
  //   const currentOptions = this.menuOptions();
  //   this.menuOptions.set([...currentOptions, new MenuOptionModel(option)]);
  // }

  // /**
  //  * Actualiza una opción existente
  //  * @param index - Índice de la opción a actualizar
  //  * @param newValues - Nuevos valores para la opción
  //  */
  // updateOption(index: number, newValues: Partial<MenuOption>) {
  //   const option = this.menuOptions()[index];
  //   if (option) {
  //     option.update(newValues);
  //   }
  // }

  // /**
  //  * Elimina una opción del menú
  //  * @param index - Índice de la opción a eliminar
  //  */
  // removeOption(index: number) {
  //   const currentOptions = this.menuOptions();
  //   const newOptions = currentOptions.filter((_, i) => i !== index);
  //   this.menuOptions.set(newOptions);
  // }
}

import { computed, signal, Signal, WritableSignal } from '@angular/core';

/**
 * En Angular 17+, las Signals son la nueva forma recomendada de manejar estado reactivo.
 * Una Signal es un contenedor de valor que:
 * 1. Notifica a los consumidores cuando su valor cambia
 * 2. Hace que las actualizaciones sean rastreables y predecibles
 * 3. Permite optimizaciones de renderizado
 */

/**
 * IMPORTANTE: Hay tres tipos principales de Signals:
 * 1. WritableSignal<T>: Puede leer y escribir (signal())
 * 2. Signal<T>: Solo lectura
 * 3. Computed<T>: Valor derivado de otras signals (computed())
 */

/**
 * Interface base que define la estructura de una opción de menú con tipos primitivos.
 * Útil para:
 * - Definir la forma de los datos que vienen del backend
 * - Usar como tipo para parámetros de métodos
 * - Documentar la estructura de datos esperada
 */
export interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel?: string;
}

/**
 * Interface que define la estructura cuando queremos usar Signals.
 * Cada propiedad es un WritableSignal<string> que:
 * - Puede ser leído usando signal() -> valor.icon()
 * - Puede ser modificado usando signal.set() -> valor.icon.set('nuevo')
 * - Notifica automáticamente a la UI cuando cambia
 */
export interface MenuOptionSignals {
  icon: WritableSignal<string>;
  label: WritableSignal<string>;
  route: WritableSignal<string>;
  subLabel?: WritableSignal<string>;
}

/**
 * Factory function que crea un objeto con Signals.
 * Ventajas de usar una factory:
 * - Más flexible que una clase
 * - Mejor para crear múltiples instancias
 * - Ideal cuando solo necesitas las signals sin métodos adicionales
 *
 * @param init - Objeto opcional con valores iniciales
 * @returns Un objeto que implementa MenuOptionSignals
 *
 * @example
 * // Crear una opción de menú con signals
 * const option = createMenuOptionSignals({
 *   icon: 'star',
 *   label: 'Favoritos'
 * });
 *
 * // Leer valores
 * console.log(option.icon()); // 'star'
 *
 * // Actualizar valores
 * option.label.set('Mis Favoritos');
 */
export function createMenuOptionSignals(init?: Partial<MenuOption>): MenuOptionSignals {
  return {
    icon: signal(init?.icon ?? ''),
    label: signal(init?.label ?? ''),
    route: signal(init?.route ?? ''),
    subLabel: signal(init?.subLabel ?? ''),
  };
}

/**
 * Clase que implementa MenuOptionSignals usando un enfoque orientado a objetos.
 * Ventajas de usar una clase:
 * - Puedes añadir métodos y lógica adicional
 * - Mejor para encapsulamiento
 * - Permite usar herencia y polimorfismo
 * - Ideal para objetos complejos con comportamiento
 */
export class MenuOptionModel implements MenuOptionSignals {
  // Declaración de signals con valores por defecto
  readonly icon = signal('');
  readonly label = signal('');
  readonly route = signal('');
  readonly subLabel = signal('');

  // Signal computada de ejemplo - se actualiza automáticamente
  readonly fullLabel = computed(() => {
    const label = this.label();
    const sub = this.subLabel();
    return sub ? `${label} - ${sub}` : label;
  });

  /**
   * Constructor que acepta valores iniciales opcionales
   * @param init - Objeto parcial con valores iniciales
   *
   * @example
   * const option = new MenuOptionModel({
   *   icon: 'home',
   *   label: 'Inicio'
   * });
   */
  constructor(init?: Partial<MenuOption>) {
    if (init) {
      if (init.icon) this.icon.set(init.icon);
      if (init.label) this.label.set(init.label);
      if (init.route) this.route.set(init.route);
      if (init.subLabel) this.subLabel.set(init.subLabel);
    }
  }

  /**
   * Método de utilidad para actualizar todas las propiedades a la vez
   * @param values - Nuevos valores para actualizar
   */
  update(values: Partial<MenuOption>) {
    if (values.icon) this.icon.set(values.icon);
    if (values.label) this.label.set(values.label);
    if (values.route) this.route.set(values.route);
    if (values.subLabel) this.subLabel.set(values.subLabel);
  }

  /**
   * Método para reiniciar todos los valores
   */
  reset() {
    this.icon.set('');
    this.label.set('');
    this.route.set('');
    this.subLabel.set('');
  }
}

/**
 * EJEMPLOS DE USO EN COMPONENTES:
 *
 * 1. En el componente TypeScript:
 *
 * @Component({...})
 * export class MenuComponent {
 *   // Crear una signal que contiene un array de MenuOptionModel
 *   menuOptions = signal([
 *     new MenuOptionModel({
 *       icon: 'star',
 *       label: 'Favoritos'
 *     })
 *   ]);
 *
 *   // O usar la factory
 *   singleOption = createMenuOptionSignals({
 *     icon: 'home',
 *     label: 'Inicio'
 *   });
 * }
 *
 * 2. En el template HTML:
 *
 * <div *ngFor="let option of menuOptions()">
 *   <i [class]="option.icon()"></i>
 *   <span>{{ option.label() }}</span>
 *   <!-- Computed signal -->
 *   <span>{{ option.fullLabel() }}</span>
 * </div>
 *
 * 3. Actualizar valores:
 *
 * // Forma individual
 * this.menuOptions()[0].icon.set('new-icon');
 *
 * // Actualizar múltiples propiedades
 * this.menuOptions()[0].update({
 *   icon: 'new-icon',
 *   label: 'New Label'
 * });
 */

// Uso recomendado:
// - Si sólo necesitas tipos, usa `MenuOption` (valores primitivos).
// - Si quieres que cada propiedad sea una Signal, crea instancias con
//   `createMenuOptionSignals(...)` o `new MenuOptionModel(...)`.

import { Component, input } from '@angular/core';
import { GiftListItem } from "./gift-list-item/gift-list-item";

@Component({
  selector: 'gift-list',
  imports: [GiftListItem], // Agregar GiftListItem a los imports
  templateUrl: './gift-list.html',
})
export class GiftList {
  gifs = input.required<String[]>(); // Recibir la lista de URLs como entrada
}

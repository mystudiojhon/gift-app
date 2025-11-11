import { Component, input, output } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
})
export class GiftListItem {
  imageUrls = input.required<String>(); // Recibir la URL de la imagen como entrada
}

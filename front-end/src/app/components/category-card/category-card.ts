import { Component, input } from '@angular/core';
import { Category } from '../../models/product.model';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
})
export class CategoryCard {
  readonly category = input.required<Category>();
}

import { Component } from '@angular/core';
import { Category } from '../../models/product.model';
import { CategoryCard } from '../category-card/category-card';

@Component({
  selector: 'app-categories-section',
  imports: [CategoryCard],
  templateUrl: './categories-section.html',
})
export class CategoriesSection {
  /**
   * Static for now. When a `/categories` endpoint is added on the backend,
   * inject a service and replace this with a signal populated from the API
   * (mirroring `TopPicks`).
   */
  protected readonly categories: Category[] = [
    {
      id: 'headphones',
      name: 'Headphones',
      slug: 'headphones',
      imageUrl:
        'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=900&auto=format&fit=crop',
    },
    {
      id: 'phones',
      name: 'Phones',
      slug: 'phones',
      imageUrl:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop',
    },
    {
      id: 'laptops',
      name: 'Laptops',
      slug: 'laptops',
      imageUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop',
    },
    {
      id: 'consoles',
      name: 'Consoles',
      slug: 'consoles',
      imageUrl:
        'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=900&auto=format&fit=crop',
    },
  ];
}

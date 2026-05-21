import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (img && img.src !== FALLBACK_IMAGE) {
      img.src = FALLBACK_IMAGE;
    }
  }

  protected formatPrice(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0,
    }).format(value);
  }
}

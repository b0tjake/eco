import { Component, OnInit, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductCard } from '../product-card/product-card';

type LoadState = 'loading' | 'ready' | 'empty' | 'error';

@Component({
  selector: 'app-top-picks',
  imports: [ProductCard],
  templateUrl: './top-picks.html',
})
export class TopPicks implements OnInit {
  private readonly productsService = inject(ProductsService);

  protected readonly products = signal<Product[]>([]);
  protected readonly state = signal<LoadState>('loading');

  /** Used by the loading skeleton. */
  protected readonly skeletonSlots = Array.from({ length: 8 });

  ngOnInit(): void {
    this.productsService.getTopPicks(8).subscribe({
      next: (list) => {
        this.products.set(list);
        this.state.set(list.length === 0 ? 'empty' : 'ready');
      },
      error: () => {
        // ProductsService already swallows errors with a fallback,
        // so this branch is a defense-in-depth.
        this.state.set('error');
      },
    });
  }
}

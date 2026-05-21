import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Product } from '../models/product.model';

/**
 * Base URL for the .NET backend (see /backend/Program.cs).
 * TODO: lift this into an `environments/` file when one is added.
 * NOTE: backend currently has no CORS configured — calls from the browser
 * will fall back to dummy data below until CORS is enabled in Program.cs.
 */
const API_BASE_URL = 'http://localhost:5000';

/**
 * Local fallback so the landing page still looks good when the API is
 * unreachable, returns broken image URLs (the seeded backend data uses
 * `example.com` placeholders), or is hit by a CORS preflight failure.
 */
const FALLBACK_TOP_PICKS: Product[] = [
  {
    id: 1001,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation over-ear headphones.',
    price: 3499,
    imageUrl:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop',
    releaseDate: '2024-01-10',
  },
  {
    id: 1002,
    name: 'iPhone 15 Pro',
    description: 'Titanium design with the A17 Pro chip.',
    price: 13999,
    imageUrl:
      'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&auto=format&fit=crop',
    releaseDate: '2024-03-20',
  },
  {
    id: 1003,
    name: 'PlayStation 5 Slim',
    description: 'Next-gen gaming with lightning-fast load times.',
    price: 6299,
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop',
    releaseDate: '2024-02-05',
  },
  {
    id: 1004,
    name: 'MacBook Air M3',
    description: '13-inch ultrabook, all-day battery, fanless design.',
    price: 14499,
    imageUrl:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop',
    releaseDate: '2024-04-01',
  },
  {
    id: 1005,
    name: 'AirPods Pro 2',
    description: 'Active noise cancellation with adaptive transparency.',
    price: 2799,
    imageUrl:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop',
    releaseDate: '2024-01-25',
  },
  {
    id: 1006,
    name: 'Samsung Galaxy S24',
    description: 'Flagship Android phone with Galaxy AI.',
    price: 9799,
    imageUrl:
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop',
    releaseDate: '2024-03-15',
  },
  {
    id: 1007,
    name: 'Xbox Series X',
    description: '4K 120fps gaming with Quick Resume.',
    price: 5999,
    imageUrl:
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop',
    releaseDate: '2024-02-18',
  },
  {
    id: 1008,
    name: 'Dell XPS 15',
    description: 'Creator laptop with InfinityEdge OLED display.',
    price: 18999,
    imageUrl:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop',
    releaseDate: '2024-04-12',
  },
];

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly http = inject(HttpClient);

  /**
   * Fetches the "top picks" list. Today the backend exposes only `GET /products`,
   * so we slice the result. Swap to `/products/top-picks` once that endpoint exists.
   */
  getTopPicks(limit = 8): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_BASE_URL}/products`).pipe(
      map((list) => (list ?? []).slice(0, limit)),
      catchError(() => of(FALLBACK_TOP_PICKS.slice(0, limit))),
    );
  }
}

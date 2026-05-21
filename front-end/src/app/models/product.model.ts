/**
 * Mirrors the backend `ProductDot` record (see backend/DTOs/product.cs).
 * ASP.NET Core serializes records with camelCase by default.
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  /** ISO date string, e.g. "2024-06-01". */
  releaseDate: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  /** Optional slug for future routing, e.g. /category/headphones */
  slug: string;
}

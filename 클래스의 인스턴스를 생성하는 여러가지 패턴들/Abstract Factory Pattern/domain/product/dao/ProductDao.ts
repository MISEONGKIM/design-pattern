import { Product } from "../Product";

export interface ProductDao {
  insertProduct(product: Product): void;
  updateProduct(product: Product): void;
  deleteProduct(product: Product): void;
}

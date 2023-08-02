import { ProductCategory } from "./ProductCategory";

export class Product extends ProductCategory {
  constructor(id: number, name: string, price: number) {
    super(id, name, price);
  }
  addProduct(product: ProductCategory): void {}
  removeProduct(product: ProductCategory): void {}
  getCount(): number {
    return 1;
  }
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
  getId(): number {
    return this.id;
  }
}

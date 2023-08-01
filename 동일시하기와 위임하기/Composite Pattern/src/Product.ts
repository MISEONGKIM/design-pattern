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
    return super.name;
  }
  getPrice(): number {
    return super.price;
  }
  getId(): number {
    return super.id;
  }
}

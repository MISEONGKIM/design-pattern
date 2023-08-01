export abstract class ProductCategory {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  abstract addProduct(product: ProductCategory): void;
  abstract removeProduct(product: ProductCategory): void;
  abstract getCount(): number;
  abstract getName(): string;
  abstract getPrice(): number;
  abstract getId(): number;
}

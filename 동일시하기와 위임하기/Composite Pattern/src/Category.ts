import { ProductCategory } from "./ProductCategory";

export class Category extends ProductCategory {
  list: ProductCategory[] = [];
  constructor(id: number, name: string, price: number) {
    super(id, name, price);
    this.list = [] as ProductCategory[];
  }
  addProduct(product: ProductCategory): void {
    this.list.push(product);
  }
  removeProduct(product: ProductCategory): void {
    const index = this.list.findIndex(
      (item) => item.getId() === product.getId()
    );
    this.list.splice(index, 1);
  }
  getCount(): number {
    return this.list.reduce((acc, cur) => {
      acc += cur.getCount();
      return acc;
    }, 0);
  }
  getName(): string {
    return this.list.toString();
  }
  getPrice(): number {
    return this.list.reduce((acc, cur) => {
      acc += cur.getPrice();
      return acc;
    }, 0);
  }
  getId(): number {
    return 0;
  }
}

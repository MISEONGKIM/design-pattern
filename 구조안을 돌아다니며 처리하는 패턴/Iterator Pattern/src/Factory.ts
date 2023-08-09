import { Aggregate } from "./Aggregate";
import { IteratorInterface } from "./IteratorInterface";

export abstract class Factory {
  create(list: Aggregate, type: number) {
    return this.createProduct(list, type);
  }
  protected abstract createProduct(
    list: Aggregate,
    type: number
  ): IteratorInterface | null;
}

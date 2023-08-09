import { Aggregate } from "./Aggregate";
import { BookShelfIterator } from "./BookShelfIterator";
import { Constant } from "./Constant";
import { Factory } from "./Factory";
import { ReverseIterator } from "./ReverseIterator";

export class IteratorFactory extends Factory {
  static ifacgory = new IteratorFactory();

  static getInstance(): IteratorFactory {
    if (this.ifacgory === null) {
      this.ifacgory = new IteratorFactory();
    }
    return this.ifacgory;
  }

  protected createProduct(bookShelf: Aggregate, type: number) {
    if (type === Constant.FORWARD) {
      return new BookShelfIterator(bookShelf);
    } else if (type === Constant.REVERSE) {
      return new ReverseIterator(bookShelf);
    }
    return null;
  }
}

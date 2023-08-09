import { Aggregate } from "./Aggregate";
import { BookShelf } from "./BookShelf";
import { IteratorInterface } from "./IteratorInterface";

export class BookShelfIterator implements IteratorInterface {
  private bookShelf: BookShelf;
  private index: number;
  constructor(bookShelf: Aggregate) {
    this.bookShelf = bookShelf as BookShelf;
    this.index = 0;
  }
  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    }
    return false;
  }
  next(): Object {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}

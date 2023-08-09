import { Aggregate } from "./Aggregate";
import { BookShelf } from "./BookShelf";
import { IteratorInterface } from "./IteratorInterface";

export class ReverseIterator implements IteratorInterface {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookSelf: Aggregate) {
    this.bookShelf = bookSelf as BookShelf;
    this.index = this.bookShelf.getLength() - 1;
  }

  hasNext(): boolean {
    if (this.index >= 0) {
      return true;
    }
    return false;
  }
  next(): Object {
    const book = this.bookShelf.getBookAt(this.index);
    this.index--;
    return book;
  }
}

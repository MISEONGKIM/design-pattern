import { Aggregate } from "./Aggregate";
import { Book } from "./Book";
import { IteratorFactory } from "./IteratorFactory";

export class BookShelf implements Aggregate {
  private books: Book[];
  private last: number;
  f = IteratorFactory.getInstance();
  constructor(maxsize: number) {
    this.books = new Array(maxsize);
    this.last = 0;
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }
  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  iterator(type: number) {
    return this.f.create(this, type);
  }
  getLength(): number {
    return this.last;
  }
}

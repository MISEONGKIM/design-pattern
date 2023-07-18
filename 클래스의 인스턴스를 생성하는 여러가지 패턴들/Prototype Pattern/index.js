class Book {
  #author;
  #title;

  get author() {
    return this.#author;
  }
  set author(author) {
    this.#author = author;
  }

  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }

  constructor(author, title) {
    this.#author = author;
    this.#title = title;
  }

  toString() {
    return `[${this.#author} ${this.#title}]`;
  }
}

class BookShelf {
  #shelf;
  get shelf() {
    return this.#shelf;
  }
  set shelf(shelf) {
    this.#shelf = shelf;
  }

  constructor() {
    this.#shelf = [];
  }

  addBook(book) {
    this.#shelf.push(book);
  }

  clone() {
    const clone = new BookShelf();
    clone.shelf = this.shelf.map((book) => new Book(book.author, book.title));
    return clone;
  }

  toString() {
    return this.#shelf.toString();
  }
}

class PrototypeTest {}

// 견본
const bookShelf = new BookShelf();

bookShelf.addBook(new Book("조정래", "태백산맥"));
bookShelf.addBook(new Book("박완서", "나목"));
bookShelf.addBook(new Book("박경리", "토지"));

const another = bookShelf.clone();

console.log(bookShelf.toString());
console.log(another.toString());

bookShelf.shelf[0].title = "다른거";

console.log(bookShelf.toString());
console.log(another.toString());

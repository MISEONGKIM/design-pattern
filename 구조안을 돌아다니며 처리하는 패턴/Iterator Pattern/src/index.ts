import { Book } from "./Book";
import { BookShelf } from "./BookShelf";
import { Constant } from "./Constant";

const bookShelf = new BookShelf(4);
bookShelf.appendBook(new Book("Around the World in 80 Days"));
bookShelf.appendBook(new Book("Bible"));
bookShelf.appendBook(new Book("Cinderella"));
bookShelf.appendBook(new Book("Daddy-Long-Legs"));

const it = bookShelf.iterator(Constant.FORWARD);
while (it!.hasNext()) {
  const book = it!.next() as Book;
  console.log(book.getName());
}

console.log("------------------");

const it2 = bookShelf.iterator(Constant.REVERSE);
while (it2!.hasNext()) {
  const book = it2!.next() as Book;
  console.log(book.getName());
}

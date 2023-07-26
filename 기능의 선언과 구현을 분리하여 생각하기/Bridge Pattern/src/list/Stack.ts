import { AbstractList } from "../implement/AbstractList";
import { List } from "./List";

export class Stack<T> extends List<T> {
  constructor(list: AbstractList<T>) {
    super(list);
    console.log("Stack을 구현합니다.");
  }

  push(obj: T) {
    this.impl.insertElement(obj, 0);
  }

  pop() {
    return this.impl.deleteElement(0);
  }
}

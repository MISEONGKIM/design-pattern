import { AbstractList } from "../implement/AbstractList";
import { List } from "./List";

export class Queue<T> extends List<T> {
  constructor(list: AbstractList<T>) {
    super(list);
    console.log("Queue를 구현합니다.");
  }

  enQueue(obj: T) {
    this.impl.addElement(obj);
  }

  deQueue() {
    return this.impl.deleteElement(0);
  }
}

import { AbstractList } from "../implement/AbstractList";

export class List<T> {
  impl: AbstractList<T>;

  constructor(list: AbstractList<T>) {
    this.impl = list;
  }

  add(obj: T) {
    this.impl.addElement(obj);
  }

  get(index: number) {
    return this.impl.getElement(index);
  }

  remove(index: number) {
    return this.impl.deleteElement(index);
  }

  getSize() {
    return this.impl.getElementSize();
  }
}

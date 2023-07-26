import { AbstractList } from "./AbstractList";

//강의예제는 java임.
//java에는 linkedlist가 있는데 javascript는 없어서 일단 배열로 구현
export class LinkedListImpl<T> implements AbstractList<T> {
  linkedList: T[] = [];
  constructor() {
    console.log("LinkedList로 구현합니다.");
  }
  addElement(obj: T): void {
    this.linkedList.push(obj);
  }

  deleteElement(index: number): T {
    return this.linkedList.splice(index, 1)[0];
  }
  insertElement(obj: T, index: number): number {
    this.linkedList.splice(index, 0, obj);
    return index;
  }
  getElement(index: number): T {
    return this.linkedList[index];
  }
  getElementSize(): number {
    return this.linkedList.length;
  }
}

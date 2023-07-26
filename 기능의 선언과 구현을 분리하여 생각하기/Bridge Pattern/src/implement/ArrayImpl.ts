import { AbstractList } from "./AbstractList";

//강의예제는 java임.
//java에는 Arraylist가 있는데 javascript는 없어서 일단 배열로 구현
export class ArrayImpl<T> implements AbstractList<T> {
  array: T[] = [];

  constructor() {
    console.log("Array로 구현합니다.");
  }

  addElement(obj: T): void {
    this.array.push(obj);
  }

  deleteElement(index: number): T {
    return this.array.splice(index, 1)[0];
  }
  insertElement(obj: T, index: number): number {
    this.array.splice(index, 0, obj);
    return index;
  }
  getElement(index: number): T {
    return this.array[index];
  }
  getElementSize(): number {
    return this.array.length;
  }
}

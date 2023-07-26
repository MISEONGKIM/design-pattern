export interface AbstractList<T> {
  addElement(obj: T): void;
  deleteElement(index: number): T;
  insertElement(obj: T, index: number): number;
  getElement(index: number): T;
  getElementSize(): number;
}

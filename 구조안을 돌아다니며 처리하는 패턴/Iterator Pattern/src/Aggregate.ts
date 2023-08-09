import { IteratorInterface } from "./IteratorInterface";

export interface Aggregate {
  iterator(type: number): IteratorInterface | null;
  getLength(): number;
}

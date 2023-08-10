import { Acceptor } from "./Acceptor";
import { Visitor } from "./Visitor";

export abstract class Entry implements Acceptor {
  accept(v: Visitor): void {
    throw new Error("Method not implemented.");
  }
  abstract getName(): string;
  abstract getSize(): number;

  add(entry: Entry): Entry {
    throw new Error("FileTreatmentException");
  }
  iterator(): Entry[] {
    throw new Error("FileTreatmentException");
  }
  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}

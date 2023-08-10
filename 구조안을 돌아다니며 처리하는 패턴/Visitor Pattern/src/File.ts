import { Entry } from "./Entry";
import { Visitor } from "./Visitor";

export class File extends Entry {
  constructor(private name: string, private size: number) {
    super();
  }

  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
  accept(v: Visitor): void {
    v.visitF(this);
  }
}

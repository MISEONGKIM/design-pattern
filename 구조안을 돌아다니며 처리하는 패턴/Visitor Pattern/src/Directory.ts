import { Entry } from "./Entry";
import { Visitor } from "./Visitor";

export class Directory extends Entry {
  private directory: Entry[] = [];

  constructor(private name: string) {
    super();
  }

  getName(): string {
    return this.name;
  }
  getSize(): number {
    let size = 0;
    this.directory.forEach((entry) => {
      size += entry.getSize();
    });
    return size;
  }
  add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }
  iterator(): Entry[] {
    return this.directory;
  }
  accept(v: Visitor): void {
    v.visitD(this);
  }
}

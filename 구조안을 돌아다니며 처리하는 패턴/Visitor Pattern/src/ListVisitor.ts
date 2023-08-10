import { Directory } from "./Directory";
import { File } from "./File";
import { Visitor } from "./Visitor";

export class ListVisitor extends Visitor {
  currentdir: string = "";

  visitF(file: File) {
    console.log(`${this.currentdir}/${file}`);
  }
  visitD(directory: Directory) {
    console.log(`${this.currentdir}/${directory}`);
    const savedir = this.currentdir;
    this.currentdir = `${this.currentdir}/${directory.getName()}`;
    directory.iterator().forEach((entry) => {
      entry.accept(this);
    });
    this.currentdir = savedir;
  }
}

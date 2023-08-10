import { Directory } from "./Directory";
import { File } from "./File";

export abstract class Visitor {
  abstract visitF(file: File): void;
  abstract visitD(directory: Directory): void;
}

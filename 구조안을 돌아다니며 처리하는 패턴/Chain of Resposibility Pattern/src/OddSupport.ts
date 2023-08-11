import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class OddSupport extends Support {
  constructor(name: string) {
    super(name);
  }
  resolve(trouble: Trouble) {
    if (trouble.getNumber() % 2 === 1) {
      return true;
    }
    return false;
  }
}

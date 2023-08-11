import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class SpecialSupport extends Support {
  constructor(name: string, private number: number) {
    super(name);
  }
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() === this.number) {
      return true;
    }
    return false;
  }
}

import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class LimitSupport extends Support {
  constructor(name: string, private limit: number) {
    super(name);
  }
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() < this.limit) {
      return true;
    }
    return false;
  }
}

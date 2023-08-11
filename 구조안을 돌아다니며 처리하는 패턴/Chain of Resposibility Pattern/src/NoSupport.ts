import { Support } from "./Support";

export class NoSupport extends Support {
  constructor(name: string) {
    super(name);
  }
  resolve() {
    return false;
  }
}

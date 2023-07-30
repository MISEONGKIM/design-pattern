import { Coffee } from "./Coffee";
import { Decorator } from "./Decorator";

export class WhippedCream extends Decorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  brewing() {
    super.brewing();
    console.log("Adding WhippedCream ");
  }
}

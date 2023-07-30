import { Coffee } from "./Coffee";
import { Decorator } from "./Decorator";

export class Latte extends Decorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  brewing() {
    super.brewing();
    console.log("Adding Milk ");
  }
}

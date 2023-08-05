import { NumberGenerator } from "./NumberGenerator";
import { Observer } from "./Observer";

export class DigitObserver implements Observer {
  update(generator: NumberGenerator) {
    console.log("DigitObserver:" + generator.getNumber());
  }
}

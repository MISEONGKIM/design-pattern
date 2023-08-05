import { NumberGenerator } from "./NumberGenerator";
import { Observer } from "./Observer";

export class GraphObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log("GraphObserver");
    const count = generator.getNumber();
    let st = "";
    for (let i = 0; i < count; i++) {
      st += "*";
    }
    console.log(st);
  }
}

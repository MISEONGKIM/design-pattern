import { NumberGenerator } from "./NumberGenerator";

export class RandomNumberGenerator extends NumberGenerator {
  num: number = 0;
  getNumber(): number {
    return this.num;
  }
  execute(): void {
    for (let i = 0; i < 20; i++) {
      this.num = Math.floor(Math.random() * 50);
      this.notifyObservers();
    }
  }
}

import { Observer } from "./Observer";

export abstract class NumberGenerator {
  observers: Array<Observer> = [];
  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  deleteObserver(observer: Observer) {
    const index = this.observers.findIndex((data) => data === observer);
    this.observers.slice(index, 1);
  }

  notifyObservers() {
    this.observers.forEach((ob) => {
      ob.update(this);
    });
  }
  abstract getNumber(): number;
  abstract execute(): void;
}

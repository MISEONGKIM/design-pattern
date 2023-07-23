import { Car } from "./Car";
import { CarFactory } from "./CarFactory";
import { Sonata } from "./Sonata";
import { Santafe } from "./Santafe";

export class HyundaiFactory extends CarFactory {
  carMap: Record<string, Car> = {};

  //factory method
  createCar(name: string): Car | null {
    let car: Car | null = null;
    if (name === "sonata") {
      car = new Sonata();
    }

    if (name === "santafe") {
      car = new Santafe();
    }
    return car;
  }

  //factory method
  returnMyCar(name: string): Car {
    // Jame는 Sonata, Tomas는 Santafe 인 경우
    let myCar = this.carMap[name];
    if (!myCar) {
      if (name === "James") {
        myCar = new Sonata();
      } else if (name === "Tomas") {
        myCar = new Santafe();
      }
      this.carMap[name] = myCar;
    }

    return myCar;
  }
}

import { Car } from "./Car";

export abstract class CarFactory {
  abstract createCar(name: string): Car | null;
  abstract returnMyCar(name: string): Car;

  numbering() {
    console.log("numbering");
  }

  washCar() {
    console.log("washCar");
  }

  //template method
  sellCar(name: string) {
    this.numbering();
    this.createCar(name);
    this.washCar();
  }
}

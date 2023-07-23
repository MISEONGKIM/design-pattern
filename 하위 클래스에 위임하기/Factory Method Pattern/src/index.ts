import { HyundaiFactory } from "./HyundaiFactory";

const factory = new HyundaiFactory();
const newCar = factory.createCar("sonata");

console.log(newCar);

const myCar = factory.returnMyCar("Tomas");
const hisCar = factory.returnMyCar("Tomas");
console.log(myCar === hisCar);

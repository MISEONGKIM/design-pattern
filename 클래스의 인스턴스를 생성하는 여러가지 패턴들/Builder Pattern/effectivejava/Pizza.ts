export const Topping = {
  HAM: "HAM",
  MUSHROOM: "MUSHROOM",
  ONION: "ONION",
  PEPPER: "PEPPER",
  SAUSAGE: "SAUSAGE",
} as const;
type ToppingType = (typeof Topping)[keyof typeof Topping];

export abstract class PizzaBuilder {
  toppings: ToppingType[] = [];

  addTopping(topping: ToppingType) {
    this.toppings.push(topping);
    return this.self();
  }

  sauceInside() {
    return this.self();
  }

  clone() {
    return [...this.toppings];
  }

  abstract build(): Pizza;
  protected abstract self(): PizzaBuilder;
}

export class Pizza {
  toppings: ToppingType[];

  constructor(builder: PizzaBuilder) {
    this.toppings = builder.clone();
  }

  toString() {
    return this.toppings.toString();
  }
}

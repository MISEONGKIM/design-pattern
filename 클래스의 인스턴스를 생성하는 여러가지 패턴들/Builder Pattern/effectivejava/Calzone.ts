import { Pizza, PizzaBuilder } from "./Pizza";

class Builder extends PizzaBuilder {
  sauce: boolean = false;
  constructor() {
    super();
  }

  getSauceInside() {
    this.sauce = true;
    return this;
  }

  build(): Calzone {
    return new Calzone(this);
  }
  protected self(): Builder {
    return this;
  }
}

export class Calzone extends Pizza {
  private sauceInside: boolean;
  static Builder = Builder;

  constructor(builder: Builder) {
    super(builder);
    this.sauceInside = builder.sauce;
  }

  toString() {
    return super.toppings.toString() + " sauceInside: " + this.sauceInside;
  }
}

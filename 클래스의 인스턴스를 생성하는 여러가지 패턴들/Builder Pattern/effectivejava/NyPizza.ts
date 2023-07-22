import { Pizza, PizzaBuilder } from "./Pizza";

export const Size = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
} as const;
type SIZE = (typeof Size)[keyof typeof Size];

class Builder extends PizzaBuilder {
  size: SIZE;
  constructor(size: SIZE) {
    super();
    this.size = size;
  }

  build(): NyPizza {
    return new NyPizza(this);
  }
  protected self(): Builder {
    return this;
  }
}

export class NyPizza extends Pizza {
  private size: SIZE;
  static Builder = Builder;

  constructor(builder: Builder) {
    super(builder);
    this.size = builder.size;
  }
}

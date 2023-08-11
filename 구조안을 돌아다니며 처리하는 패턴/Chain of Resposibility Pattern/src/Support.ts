import { Trouble } from "./Trouble";

export abstract class Support {
  private next: Support | undefined;
  constructor(private name: string) {}
  setNext(next: Support): Support {
    this.next = next;
    return next;
  }

  support(trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next !== undefined) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }
  toString(): string {
    return `[${this.name}]`;
  }
  protected abstract resolve(trouble: Trouble): boolean;
  protected done(trouble: Trouble): void {
    console.log(`${trouble} is resolved by ${this}.`);
  }
  protected fail(trouble: Trouble): void {
    console.log(`${trouble} cannot be resolved.`);
  }
}

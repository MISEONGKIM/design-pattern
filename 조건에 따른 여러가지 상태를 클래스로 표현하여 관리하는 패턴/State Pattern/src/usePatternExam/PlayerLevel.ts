export abstract class PlayerLevel {
  abstract run(): void;
  abstract jump(): void;
  abstract turn(): void;
  abstract showLevelMessage(): void;

  //hook method
  fly() {}
  //tamplate method
  go(count: number) {
    this.run();
    for (let i = 0; i < count; i++) {
      this.jump();
    }
    this.turn();
    this.fly();
  }
}

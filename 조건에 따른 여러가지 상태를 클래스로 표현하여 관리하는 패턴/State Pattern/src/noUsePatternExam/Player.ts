export class Player {
  //level 변수에 따라서 기능들이 바뀜
  private level = 1;

  constructor() {
    this.level = 1;
  }

  getLevel() {
    return this.level;
  }

  upgradeLevel() {
    this.level++;
  }

  play(count: number) {
    this.run();
    for (let i = 0; i < count; i++) {
      this.jump();
    }
    this.turn();
  }

  run(): void {
    if (this.level === 1) {
      console.log("천천히 달립니다.");
    } else if (this.level === 2) {
      console.log("빨리 달립니다.");
    } else if (this.level === 3) {
      console.log("엄청 빨리 달립니다.");
    }
  }
  jump(): void {
    if (this.level === 1) {
      console.log("천천히 jump.");
    } else if (this.level === 2) {
      console.log("빨리 jump.");
    } else if (this.level === 3) {
      console.log("엄청 빨리 jump.");
    }
  }
  turn(): void {
    if (this.level === 1) {
      console.log("천천히 turn.");
    } else if (this.level === 2) {
      console.log("빨리 turn.");
    } else if (this.level === 3) {
      console.log("엄청 빨리 turn.");
    }
  }
}

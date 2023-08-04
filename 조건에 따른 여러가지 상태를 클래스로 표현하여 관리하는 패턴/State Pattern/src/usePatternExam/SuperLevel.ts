import { PlayerLevel } from "./PlayerLevel";

export class SuperLevel extends PlayerLevel {
  run(): void {
    console.log("엄청 빨리 달립니다.");
  }
  jump(): void {
    console.log("아주 높이 jump 합니다.");
  }
  turn(): void {
    console.log("한 바퀴 돕니다.");
  }
  showLevelMessage(): void {
    console.log("***** 고급자 레벨 입니다. *****");
  }
  fly(): void {
    console.log("엄청 높이 날아갑니다");
  }
}

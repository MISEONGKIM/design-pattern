import { PlayerLevel } from "./PlayerLevel";

export class BeginnerLevel extends PlayerLevel {
  run(): void {
    console.log("천천히 달립니다.");
  }
  jump(): void {
    console.log("Jump 할 줄 모르지롱.");
  }
  turn(): void {
    console.log("Turn 할 줄 모르지롱.");
  }
  showLevelMessage(): void {
    console.log("***** 초보자 레벨 입니다. *****");
  }
}

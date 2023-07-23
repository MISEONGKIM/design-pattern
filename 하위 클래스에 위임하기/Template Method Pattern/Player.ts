import { BeginnerLevel } from "./BeginnerLevel";
import { PlayerLevel } from "./PlayerLevel";

export class Player {
  private level: PlayerLevel;

  constructor() {
    this.level = new BeginnerLevel();
    this.level.showLevelMessage();
  }

  getLevel() {
    return this.level;
  }

  upgradeLevel(level: PlayerLevel) {
    this.level = level;
    this.level.showLevelMessage();
  }

  play(count: number) {
    this.level.go(count);
  }
}

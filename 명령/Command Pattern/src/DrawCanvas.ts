import { Drawable } from "./Drawable";
import { MacroCommand } from "./MacroCommand";

export class DrawCanvas implements Drawable {
  private history: MacroCommand | undefined;
  constructor(history: MacroCommand) {
    this.history = history;
  }

  paint() {
    this.history!.execute();
  }

  draw(x: number, y: number): void {
    console.log(x, y);
  }
}

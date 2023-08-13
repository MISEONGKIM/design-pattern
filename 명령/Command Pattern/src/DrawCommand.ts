import { Command } from "./Command";
import { Drawable } from "./Drawable";

export class DrawCommand implements Command {
  protected drawable: Drawable | undefined;
  constructor(drawable: Drawable) {
    this.drawable = drawable;
  }
  execute(): void {
    this.drawable?.draw(1, 1);
  }
}

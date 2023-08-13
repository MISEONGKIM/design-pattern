import { Command } from "./Command";

export class MacroCommand implements Command {
  commands: Command[] = [];
  execute(): void {
    this.commands.forEach((c) => c.execute());
  }

  append(cmd: Command) {
    if (cmd != this) {
      this.commands.push(cmd);
    }
  }

  undo() {
    if (this.commands.length > 0) {
      this.commands.pop();
    }
  }

  clear() {
    this.commands = [];
  }
}

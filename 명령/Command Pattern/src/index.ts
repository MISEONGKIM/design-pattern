import { DrawCanvas } from "./DrawCanvas";
import { MacroCommand } from "./MacroCommand";

const history = new MacroCommand();
const canvas = new DrawCanvas(history);

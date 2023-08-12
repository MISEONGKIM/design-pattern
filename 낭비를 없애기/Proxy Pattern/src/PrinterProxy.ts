import { Printable } from "./Printable";
import { Printer } from "./Printer";

export class PrinterProxy implements Printable {
  private real: Printer | null = null;
  constructor(private name: string) {}
  setPrinterName(name: string): void {
    if (this.real !== null) {
      this.real.setPrinterName(name);
    }
    console.log("proxy : setPrinterName()");
    this.name = name;
  }
  getPrinterName(): string {
    console.log("proxy : getPrinterName()");
    return this.name;
  }
  print(string: string): void {
    this.realize();
    this.real!.print(string);
  }

  private realize() {
    if (this.real === null) {
      this.real = new Printer(this.name);
    }
  }
}

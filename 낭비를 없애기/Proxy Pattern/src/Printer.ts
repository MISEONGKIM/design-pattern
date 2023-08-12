import { Printable } from "./Printable";

export class Printer implements Printable {
  constructor(private name: string) {
    this.heavyJob("Printer의 인스턴스" + this.name + "를 생성중");
  }
  setPrinterName(name: string): void {
    console.log("real : setPrinterName()");
    this.name = name;
  }
  getPrinterName(): string {
    console.log("real : getPrinterName()");
    return this.name;
  }
  print(string: string): void {
    console.log("=====" + this.name + "=====");
    console.log(string);
  }

  private heavyJob(msg: string) {
    console.log(msg);
    for (let i = 0; i < 5; i++) {
      console.log(".");
    }
    console.log("완료");
  }
}

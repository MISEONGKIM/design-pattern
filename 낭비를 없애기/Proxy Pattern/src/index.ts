import { PrinterProxy } from "./PrinterProxy";

const p = new PrinterProxy("Alice");
console.log("현재의 이름은 " + p.getPrinterName());
p.setPrinterName("Bob");
console.log("현재의 이름은 " + p.getPrinterName());
p.print("Hello, world.");

p.print("test");
p.setPrinterName("Tomas");
console.log("현재의 이름은 " + p.getPrinterName());

import { Banner } from "./Banner";
import { Print } from "./Print";
// adapter, 합성의 방법
export class PrintBanner implements Print {
  private banner: Banner;
  constructor(str: string) {
    this.banner = new Banner(str);
  }
  printWeak(): void {
    this.banner.showWithParen();
  }
  printStrong(): void {
    this.banner.showWithAster();
  }
}

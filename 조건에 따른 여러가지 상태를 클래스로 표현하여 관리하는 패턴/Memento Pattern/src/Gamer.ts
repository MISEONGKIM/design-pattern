import { Memento } from "./Memento";

export class Gamer {
  money: number = 0;
  fruits: Array<string> = [];
  static fruitsname = ["사과", "포도", "바나나", "귤"];
  constructor(money: number) {
    this.money = money;
  }
  getMoney() {
    return this.money;
  }
  bet() {
    const dice = Math.floor(Math.random() * 5 + 1);
    switch (dice) {
      case 1:
        this.money += 100;
        console.log("돈이 증가했습니다.");
        break;
      case 2:
        this.money /= 2;
        console.log("돈이 반으로 줄었습니다");
        break;
      case 6:
        const f = this.getFruit();
        console.log("과일(" + f + ")을 받았습다.");
        this.fruits.push(f);
        break;
      default:
        console.log("아무일도 일어나지 않습니다");
    }
  }

  createMemento() {
    const m = new Memento(this.money);
    this.fruits.forEach((f) => {
      m.addFruit(f);
    });
    return m;
  }

  restoreMemento(memento: Memento) {
    this.money = memento.money;
    this.fruits = memento.fruits;
  }
  toString() {
    return "[money = " + this.money + ", fruits = " + this.fruits + "]";
  }
  getFruit() {
    return Gamer.fruitsname[
      Math.floor(Math.random() * Gamer.fruitsname.length)
    ];
  }
}

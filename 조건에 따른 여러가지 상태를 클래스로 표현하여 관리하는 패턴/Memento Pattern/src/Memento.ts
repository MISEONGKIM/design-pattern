export class Memento {
  money: number = 0;
  fruits: Array<string> = [];

  constructor(money: number) {
    this.money = money;
    this.fruits = [];
  }
  getMoney() {
    return this.money;
  }

  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
}

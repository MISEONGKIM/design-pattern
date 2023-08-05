import { Gamer } from "./Gamer";
import { Memento } from "./Memento";

const gamer = new Gamer(100);
let memento = gamer.createMemento();
const history = [] as Array<Memento>;

for (let i = 0; i < 30; i++) {
  console.log("====" + i);
  console.log("현 상태: " + gamer);
  gamer.bet();

  console.log("돈은" + gamer.getMoney() + "원이 되었습니다");

  if (gamer.getMoney() > memento.getMoney()) {
    console.log("    (많이 증가했으니 현재의 상태를 보존해두자)");
    memento = gamer.createMemento();
    history.push(memento);
  } else if (gamer.getMoney() < memento.getMoney() / 2) {
    console.log("    (많이 줄었으니 이전의 상태로 복귀하자)");
    gamer.restoreMemento(memento);
  }
}

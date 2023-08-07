import { Button } from "./Button";
import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

// 자바예제에는 Button이 있지만 타입스크립트에는 없어서 만들어줌
export class ColleagueButton extends Button implements Colleague {
  mediator: Mediator = {} as Mediator;

  constructor(caption: string) {
    super(caption);
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean): void {
    this.setEnabled(enabled);
  }
}

import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class ColleagueTextField implements Colleague {
  private mediator: Mediator;
  text: string = "";

  getText(): string {
    return this.text;
  }
  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
  setColleagueEnabled(enabled: boolean): void {}
  textValueChanged(e: HTMLElementEventMap): void {
    //텍스트 입력이 들어오면 mediator에게 알림
    this.mediator.colleagueChanged(this);
  }
}

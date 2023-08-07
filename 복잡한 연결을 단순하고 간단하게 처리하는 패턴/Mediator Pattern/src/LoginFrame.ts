import { Colleague } from "./Colleague";
import { ColleagueButton } from "./ColleagueButton";
import { ColleagueTextField } from "./ColleagueTextField";
import { Mediator } from "./Mediator";

export class LoginFrame implements Mediator {
  private textUser: ColleagueTextField | undefined;
  private buttonOk: ColleagueButton | undefined;
  private buttonCancel: ColleagueButton | undefined;
  private layOut = [] as Colleague[];
  constructor() {
    this.createColleagues();
    this.layOut.push(this.textUser!);
    this.layOut.push(this.buttonOk!);
    this.layOut.push(this.buttonCancel!);
    this.colleagueChanged(this.buttonOk!);
  }
  createColleagues(): void {
    this.textUser = new ColleagueTextField();
    this.buttonOk = new ColleagueButton("OK");
    this.buttonCancel = new ColleagueButton("Cancel");

    this.textUser.setMediator(this);
    this.buttonOk.setMediator(this);
    this.buttonCancel.setMediator(this);
  }
  colleagueChanged(colleage: Colleague): void {
    if (this.textUser!.getText().length > 0) {
      this.buttonOk!.setColleagueEnabled(true);
      this.buttonCancel!.setColleagueEnabled(false);
      console.log("buttonOk", this.buttonOk!.isEnabled());
      console.log("buttonCancel", this.buttonCancel!.isEnabled());
    } else if (colleage === this.buttonCancel) {
      this.buttonOk!.setColleagueEnabled(false);
      this.buttonCancel.setColleagueEnabled(true);
    }
  }
}

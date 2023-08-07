import { Colleague } from "./Colleague";

export interface Mediator {
  createColleagues(): void;
  colleagueChanged(colleage: Colleague): void;
}

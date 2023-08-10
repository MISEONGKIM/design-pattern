import { Visitor } from "./Visitor";

export interface Acceptor {
  accept(v: Visitor): void;
}

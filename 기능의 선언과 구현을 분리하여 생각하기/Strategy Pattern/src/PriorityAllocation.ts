import { Scheduler } from "./Scheduler";

export class PriorityAllocation implements Scheduler {
  getNextCall(): void {
    console.log("고객 등급이 높은 고객의 전화를 먼저 가져옵니다.");
  }
  sendCallToAgent(): void {
    console.log("업무 skill 값이 높은 상담원에게 우선적으로 배분합니다.");
  }
}

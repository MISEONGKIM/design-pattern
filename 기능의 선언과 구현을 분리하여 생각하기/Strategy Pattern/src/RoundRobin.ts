import { Scheduler } from "./Scheduler";

export class RoundRobin implements Scheduler {
  getNextCall(): void {
    console.log("상담 전화를 순서대로 대기열에서 가져옵니다");
  }
  sendCallToAgent(): void {
    console.log("다음 순서 상담원에게 배분합니다.");
  }
}

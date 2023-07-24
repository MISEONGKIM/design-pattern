import { Scheduler } from "./Scheduler";

export class LeastJob implements Scheduler {
  getNextCall(): void {
    console.log("상담 전화를 순서대로 대기열에서 가져옵니다.");
  }
  sendCallToAgent(): void {
    console.log(
      "현재 상담업무가 없거나 상담대기가 가장 작은 상담원에게 할당합니다"
    );
  }
}

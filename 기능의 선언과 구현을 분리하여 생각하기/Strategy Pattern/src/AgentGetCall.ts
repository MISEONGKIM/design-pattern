import { Scheduler } from "./Scheduler";

export class AgentGetCall implements Scheduler {
  getNextCall(): void {
    console.log("상담원이 다음 전화 요청");
  }
  sendCallToAgent(): void {
    console.log("상담원이 전화 상담을 가져갔습니다.");
  }
}

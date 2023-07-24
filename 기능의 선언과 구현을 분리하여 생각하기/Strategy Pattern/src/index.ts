import { AgentGetCall } from "./AgentGetCall";
import { LeastJob } from "./LeastJob";
import { PriorityAllocation } from "./PriorityAllocation";
import { RoundRobin } from "./RoundRobin";
import { Scheduler } from "./Scheduler";

const init = () => {
  console.log("전화 상담 할당 방식을 선택 하세요.");
  console.log("R : 한명씩 차례로 할당 ");
  console.log("L : 쉬고 있거나 대기가 가장 적은 상담원에게 할당 ");
  console.log("P : 우선순위가 높은 고객 먼저 할당 ");
  console.log("A : 상담원이 상담 가져가기 ");
  const ch: string = "P";

  let scheduler: Scheduler;
  //사용하는 쪽에서는 어떤 경우에 무엇을 쓸 것이냐를 결정하는 거니까 여기는 if-else가 사용될 수 있다.
  if (ch === "R") {
    scheduler = new RoundRobin();
  } else if (ch === "L") {
    scheduler = new LeastJob();
  } else if (ch === "P") {
    scheduler = new PriorityAllocation();
  } else if (ch === "A") {
    scheduler = new AgentGetCall();
  } else {
    console.log("지원되지 않는 기능입니다.");
    return;
  }

  scheduler.getNextCall();
  scheduler.sendCallToAgent();
};
init();

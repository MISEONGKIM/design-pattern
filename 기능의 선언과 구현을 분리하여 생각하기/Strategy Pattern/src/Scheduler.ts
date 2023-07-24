export interface Scheduler {
  //상담원이 다음 call 어떻게 가져오냐
  getNextCall(): void;
  //상담원에게 call 주는거
  sendCallToAgent(): void;
}

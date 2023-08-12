# Proxy Pattern

- 객체에 대한 접근을 제어하기 위해 대리자를 둔다

* 어떤 객체가 생성에 초기화 비용이 많이 들거나 복잡한 경우 간단한 처리는 대리자를 통해 하게한다.
* 프록시 패턴은 객체에 접근하는데 보호, 가상등의 역할을 한다.

* 객체 종류
  - 원격지 프록시 (remote proxy) : 서로 다른 주소 공간에 존재하는 객체를 대리하는 로컬 객체
  - 가상 프록시 ( virtual proxy) : 고비용의 객체는 필요한 경우만 생성
    - src 밑에 예제가 이 가상 프록시
  - 보호용 프록시 (protection proxy) : 실제 객체에 대한 접근 권한을 제어하기 위한 경우 사용

(출처 : https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9D%EC%8B%9C_%ED%8C%A8%ED%84%B4)
![구조](class.png)

- Proxy : 실제 참조할 대상을 관리, 실제 객체와 동일한 메서드 제공, 클라이언트에게 먼저 노출되는 객체
  - src/PrinterProxy
- RealSubject :프록시가 대리하는 실제 객체
  - src/Printer
- Subject :Proxy와 Real의 공통 메서드 선언
  - src/Printable

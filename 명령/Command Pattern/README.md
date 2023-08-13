# Command Pattern

- 명령을 클래스로 만듬
- 요청을 객체로 만들어 전달한다.
- 요청을 기록으로 남겨 취소도 가능하도록 한다.
- 클라이언트 서버간의 프로토콜로 사용할 수 있다.
  - 예 : 메뉴, 프로토콜

* 부가적인 정보가 많은 경우는 비효율적일 수 있다.

* execute() 로 항상 실행됨. execute필 수 인 듯 !

(출처 : https://ko.wikipedia.org/wiki/%EC%BB%A4%EB%A7%A8%EB%93%9C_%ED%8C%A8%ED%84%B4)
![구조](class.png)

- Command : 각 명령이 수행할 메서드 선언
- CocreteCommand :실제 명령이 호출되도록 execute 구현
- Client : ConcreteCommand 객체를 생성하고 처리 객체로 정의
- Invoker : Command 처리를 수행할 것을 요청

* Receiver :Command를 처리함

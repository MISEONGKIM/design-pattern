# Mediator Pattern

- 중재자 패턴

* 객체간의 상호 작용을 하나의 객체에서 캡슐화하여 처리

- UI 프로그래밍에서 많이 사용되는 방법으로 Widget 간의 상호 처리를 서로간에 처리하는 것이 아닌 한 객체가 전담하여 처리하도록 하는 방식
- 객체 서로간의 메세지를 전달할 일이 있을 때도 중재자를 두고 전달할 수 있음
- N:N의 관계를 1:N의 관계로 바꿀 수 있음 (counselor)

  (출처 : https://en.wikipedia.org/wiki/Mediator_pattern)
  ![구조](class.jpg)

  - Mediator : Colleague 객체와 교류하는데 필요한 인터페이스를 정의
  - ConcreteMediator : Colleague간의 이루어지는 협력을 구현하고, 자신의 Colleague들을 관리
    - src/LoginFrame
  - Colleague : Mediator의 참조자를 가지고 있고, 다른 객체와의 협력이 필요할때 Mediator에게 알림

* ConcreteColleague간의 종속성과 결합도가 낮아지고 ConcreteColleague들은 Mediator만 집중할 수 있다. 나중에 ConcreteColleague가 추가되어도 Mediator만 알면 된다.
* 체크박스 2개(게스트, 로그인모드), 아이디/비번 입력창, 로그인 버튼이 있다고 치면 게스트일 때는 아이디/비번 입력창 비활성화되고 로그인버튼만 활성화, 그 반대의 경우는 입력창 활성화 입력창 입력하면 로그인버튼이 활성화되었을때 이런식으로 ui간의 상관관계가 있는 데 이런것을들 중재자 한곳에서 처리해주는 것
  - 이 예제에서 ColleagueTextField에 text change 이벤트가 만약 발생한다면 textValueChanged 실행되고 LoginFrame/colleagueChanged 함수가 호출되며 다른 ui들 상태 변경(버튼 활성화)

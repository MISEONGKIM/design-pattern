# Decorator Pattern

- 단순한 상속보다 설계의 융통성을 증대
- Decorator의 조합을 통해 새로운 서비스를 지속적으로 추가할 수 있음
- Decorator와 실제 컴포넌트는 동일한 것이 아님, 반드시 실제 컴포넌트를 포함해야 함
- 작은 규모의 객체들이 많이 생성될 수 있음
- 자바의 I/O 스트림 클래스는 Decorator 패턴임

  (출처 : https://zetawiki.com/wiki/%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0_%ED%8C%A8%ED%84%B4)

![구조](class_diagram.png)

- Component : 동적으로 추가할 서비스를 가질 수 있는 객체 정의
  - 이 프로젝트에서 > coffee
- ConcreteComponent : 추가적인 서비스가 필요한 실제 객체
  - kenyaAmericano, EtiopiaAmericano
- Decorator : Component의 참조자를 관리하면서 Component에 정의된 인터페이스를 만족하도록 정의
  - decorator
- ConcreteDecorator : 새롭게 추가되는 서비스를 실제 구현한 클래스로 addBehavior()를 구현한다.
  - Latte, Mocha, whippedcream,...

* decorator이 관리하는 component참조자는 항상 실제오브젝트를 포함해야 한다.
* 아래처럼 데코레이터(데코레이더(실제 오브젝트)) 이런식으로 마지막은 항상 실제 오브젝트 넘겨줘야함 !!

```
// WhippedCream, Mocha => 데코레이터
// EtiopiaAmericano => 실제 서비스하는 컴포넌트
const etiopiaWhippedMocha = new WhippedCream(new Mocha(new EtiopiaAmericano()));
etiopiaWhippedMocha.brewing();
```

- 아래는 자바소스인데
- socket.getInputStream() : 실제 오브젝트
  - byte반환함, 이것만 써서 소켓 채팅만든다면 영어로만 대화 가능
- BufferedReader, InputStreamReader : 데코레이터
  - InputStreamReader : byte를 문자로 바꿔주는 일함.
  - BufferedReader : 버퍼링까지 됨, 8k까지 동시에 읽기 가능하도록

```
    Socket socket = new Socket();
    BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
    br.readLine();
```

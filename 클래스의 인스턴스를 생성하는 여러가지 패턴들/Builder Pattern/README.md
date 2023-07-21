# Builder Pattern

- gof 디자인 패턴에서 builder pattern과 effective java에서 말하는 builder pattern 두가지가 있다.
- 두개가 완전히 다르진 않음, 객체의 생성에 대해 중점을 둠.

## gof에서 말하는 builder pattern

- 여러가지 오퍼레이션들이 결합되어서 하나의 프로덕트를 내는 것
- 메서드의 조합으로 결과물을 생성하는 방법
- 단계별 생성에 중점을 두는 패턴
- 생성과정과 구현방법을 분리하여 동일한 생성에서 여러 다른 표현이 나올 수 있다.

(출처 : https://4z7l.github.io/2021/01/19/design_pattern_builder.html#%EB%B9%8C%EB%8D%94-%ED%8C%A8%ED%84%B4builder-pattern)
![클래스다이어그램]('uml.png')

    - Builder : Product의 각 요소들을 생성하는데 필요한 추상 메서드가 선언된 클래스나 인터페이스
    - ConcreteBuilder : Builder에 선언된 메서드를 구현한 클래스
    - Director :Builder 인터페이스를 사용하여 Product를 생성
    - Product : 결과물

- Builder추상클래스를 정의하고 이를 상속받은 ConcreteBuilder서브클래스를 구현한다.
- Product의 일부가 build될 때마다 Director는 Builder에 통보한다.
- Builder는 Director의 요청을 처리해 Product에 부품을 추가한다.

- 아래 인터페이스를 구현해서 TextReport, HTMLReport(ConcreteBuilder) 등을 생성할 수 있다.

```
//Builder
interface MakeReport {
  makeHeader() : void;
  makeBody() : void;
  makeFooter() : void;

  getReport() : string;
}
```

## effective java에서 말하는 builder pattern

- 생성자를 대체하는 방법
- 객체를 생성할 때 매개 변수가 여러개인 경우 각각의 매개 변수가 점점 늘어나는 여러 개의 생성자(오버로딩)를 사용하기 보다는 인스턴스 생성을 위한 Builder를 제공함으로써, 오류를 방지하고 이후 매개 변수가 늘어나더라도 유연하게 수정할 수 있는 구조를 제공한다.

* 스프링에서 사용하고 있음
* 해당 패턴의 예시는 이 프로젝트 소스코드 참고

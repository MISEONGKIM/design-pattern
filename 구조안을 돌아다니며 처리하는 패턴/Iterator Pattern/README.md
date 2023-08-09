# Iterator Pattern

- 내부에서 객체의 순차적인 제공을 하지 않음
- 순회 구현 방식이 다르더라도 동일한 방식(메서드)로 순회 할 수 있게 제공
- 여러 리스트 객체에 대한 동일한 방식으로 순회하는 방법을 제공하기 위해 순회하는 객체를 따로 만듬

```
   // ArrayList<string> list = new ArrayList<string>();
  LinkedList<string> list = new LinkedList<string>();
  Iterator<string> ir = list.iterator();
  ir.hasNext()
```

(출처 :https://ko.wikipedia.org/wiki/%EB%B0%98%EB%B3%B5%EC%9E%90_%ED%8C%A8%ED%84%B4 )
![구조](class_diagram.png)

- Iterator : 요소에 접근하고 순회하는데 필요한 메서드 제공
- CocreteIterator :Iterator에 정의된 인터페이스를 구현하는 클래스
- Aggregate : Iterator 객체를 생성하는 인터페이스 정의
- ConcreteAggregate :해당하는 ConcreteIteratir의 인스턴스를 반환하도록 Iterator 생성 인터페이스를 구현

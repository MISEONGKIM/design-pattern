# Chain of Resposibility Pattern

- 책임 떠넘기기
- 다수의 객체를 사슬처럼 연결
- 요청을 처리할 수 있는 기회를 하나 이상의 객체에게 부여함
- 요청을 해결할 객체를 만날 때까지 객체 고리를 따라서 요청을 전달

* 하나의 요청에 대한 처리가 반드시 한 객체에서만 이루어지는것이 아닌 여러 객체가 조건이 맞으면 처리의 기회를 가지게 됨

(출처 : https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern)
![구조](class.jpg)

- Handler : 요청을 처리하는 인터페이스를 정의하고, 다음 번 처리자와의 연결을 구현한다. 연결고리에 연결된 다음 객체에게 다시 메세지를 보낸다
- Receiver : 책임져야 할 메세지를 처리한다. 처리못하는 메세지는 다음 수신자에게 전달한다.
- Sender :Receiver 객체에게 필요한 요청을 보낸다.

# Interfaces
    - 내부적으론 숨겨져있고 겉으로 드러나있는 호출방식 (외부적으로 드러나는 객체의 사용 방식이 적혀있는 타입)
    - 자바에는 없는 방식
    - 실제로 컴파일 됐을 땐 사라지게 되므로 컴파일 타입에만 필요
    - 해당 인터페이스를 이용해 관계를 규명하고(에러 등) 체크해주는 역할


## optional property
    상황에 따라 작성하는 것
    · Read-only properties - interface2.ts
    · Indexable Types - interface3.ts


## function in interface
    interface 안에 함수 정의 - interface4.ts


## class implements in interface
    interface를 class 로 만들어내기 - interface5.ts
    * 외부로 인터페이스를 노출하고 내부적으로는 class를 구현방식으로 작업


## interface extends interface
    원본 interface에 새로운 값 interface를 추가(상속이라고도 부름)


## function interface
    추상 메서드가 오직 하나인 인터페이스
    default method, static method는 넣어도 문제 없음


## Readonly interface Properties
    프로퍼티가 바뀌지 않는 값이라면 readonly를 붙이는게 좋다


## type alias VS interface
    타입에 별명을 붙이는 alias와 타입 생성의 interface 비교
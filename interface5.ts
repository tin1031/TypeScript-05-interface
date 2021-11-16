// 1. 그저 타입
interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// interface 내용을 바탕으로
// Person 이라는 class를 만들어내는것
class Person implements IPerson1 {
    name: string;
    // 3. 초기값이 지정 안 돼 있음
    age?: number | undefined;

    constructor(name: string) {
        this.name = name;
    }
    // 4. 생성자 함수를 이용해 인자로 name 받기
    hello(): void {
        console.log(`${this.name} 입니다.`);
    }
    // 2. 구현체들
}
// Person 내용이 없어서 드래그 후 전구를 눌러
// Iperson을 구현 누르면 알맹이가 자동으로 채워진다.

// 처음 hello() 함수는 미구현 상태인데, 콘솔로그를 통해 구현됨

const person: IPerson1 = new Person("Won");
person.hello();

// class도 어떻게 보면 타입이다
// person. 하면 객체 내용을 불러다 쓸 수 있다
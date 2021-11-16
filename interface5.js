"use strict";
// interface 내용을 바탕으로
// Person 이라는 class를 만들어내는것
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // 4. 생성자 함수를 이용해 인자로 name 받기
    Person.prototype.hello = function () {
        console.log(this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
// Person 내용이 없어서 드래그 후 전구를 눌러
// Iperson을 구현 누르면 알맹이가 자동으로 채워진다.
// 처음 hello() 함수는 미구현 상태인데, 콘솔로그를 통해 구현됨
var person = new Person("Won");
person.hello();
// class도 어떻게 보면 타입이다
// person. 하면 객체 내용을 불러다 쓸 수 있다

"use strict";
var p41 = {
    name: "Won",
    age: 25,
    hello: function () {
        console.log(this.name + " \uC785\uB2C8\uB2E4.");
    }
};
var p42 = {
    name: "Won",
    age: 25,
    hello: function () {
        console.log(this.name + " \uC785\uB2C8\uB2E4.");
    }
};
// const p43: Person4 = {
//     name: "Won",
//     age: 25,
//     hello: (): void => {
//         console.log(`${this.name} 입니다.`);
//     }
// }
// 1. 함수를 만들어 hello() 변수에 할당하는 방법
// 2. function 키워드를 지운 형태
// 3. 화살표 함수 / 문제점: this 사용 불가능
//    this를 사용할 경우 3번은 사용 못함 > 실행불가
// this: Person4를 p42의 hello 첫번째 인자로 넣는건 가능
// this의 값에 다른 객체를 넣어 실험할 때 유용
p41.hello();
p42.hello();
// js로 변환 후 node interface4.js 해보면 성공적 결과

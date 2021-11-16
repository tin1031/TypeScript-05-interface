"use strict";
function a1(person) {
    console.log(person.name + " \uC785\uB2C8\uB2E4");
}
// 출력만 할 것이기에 void로 리턴타입 지정
var p1 = {
    name: "Won",
    age: 25
};
a1(p1);

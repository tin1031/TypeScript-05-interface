"use strict";
// index : 어떤 것이든 프로퍼티 이름으로 지정할 수 있고
// 그 이름에 해당하는 실제값을 타이핑 할 수 있다
function a3(person) {
    console.log(person.name + " \uC785\uB2C8\uB2E4.");
}
var p31 = {
    name: "Won",
    age: 25
};
var p32 = {
    name: "Hye",
    systers: ["Jeong", "ILY"]
};
// systers 안의 배열이 Person3의 any에 대응
// string의 배열이나 any안에 s가 있어 문제 없음
var p33 = {
    name: "YuH",
    father: p31,
    mother: p32,
};
// any라 객체가 들어가도 상관 x
a3(p31);

"use strict";
function a2(person) {
    console.log(person.name + " \uC785\uB2C8\uB2E4.");
}
a2({ name: "Won", age: 25 });
a2({ name: "Hye" });
// 의도적으로 객체 프로퍼티의
// 유무를 가리는 건 ? 를 사용한다.

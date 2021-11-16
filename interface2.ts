interface Person2 {
    name: string;
    age?: number;
}

function a2(person: Person2): void{
    console.log(`${person.name} 입니다.`);
}

a2({name: "Won", age: 25});
a2({name: "Hye"});
// 의도적으로 객체 프로퍼티의
// 유무를 가리는 건 ? 를 사용한다.
// 인터페이스를 어떻게
// 여러 형태로 요구 사항에 맞게 만들 수 있는가
interface Person1 {
    name: string;
    age: number;
}

function a1(person: Person1): void {
    console.log(`${person.name} 입니다`);
}
// 출력만 할 것이기에 void로 리턴타입 지정

const p1: Person1 = {
    name: "Won",
    age: 25
};

a1(p1);
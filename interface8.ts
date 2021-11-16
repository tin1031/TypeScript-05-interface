interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Won",
    gender: "woman",
}

p81.gender = "female"

// 타입스크립트 장점 : 코드에 의도를 담아 다른 사람이
// 코드를 수정 못하도록 의사표시 하는 것
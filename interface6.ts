interface Iperson2 {
    name: string;
    age?: number;
}

interface IKorean extends Iperson2 {
    city: string;
}
// extends를 이용해 IPerson2를 상속

const k: IKorean = {
    name: "Won",
    city: "Dagu",
    age: 25
}
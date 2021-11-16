// type alias

// function
type EatType = (food:string) => void;
// array - 별칭만 지정
type PersonList = string[];



// interface

//function
interface IEat {
    (food: string) : void;
}
// array - 인덱서블 타입
interface IPersonList {
    [index: number]: string;
}



// =============
// intersecion

interface ErrorHandling {
    successs: boolean;
    error?: {message: string};
}
interface ArtistsData {
    artists: {name: string} [];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface - 가중상속
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art : ArtistsResponseType;
let iar : IArtistsResponse;



// =============
// union types

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swin(): void;
    layEggs(): void;
}

// type alias
type PetType = Bird | Fish;

// interface & class - 표현이 어렵다
interface IPet extends PetType {}
class Pet implements PetType {}
// 상속 및 클래스에 넣어줄 수 없음



// =============
// Declaration Merging - interface만 가능
// alias는 같은 이름 중복 사용 불가능

interface MergingInterface {
    a : string;
}

interface MergingInterface {
    b : string;
}

let mi : MergingInterface;
// mi.
// Merging 되었기에 a, b 둘 다 나옴

// html element에 확장할 때 유용

interface HelloPerson {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string){
    console.log(`${name} 입니다.`);
}

helloPerson("Won", 25);
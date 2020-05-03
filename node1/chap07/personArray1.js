class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let array = [];

for (let i = 0; i < 10; ++i) {
    array.push(new Person("홍길동", 16 + i));
}

console.log(array);

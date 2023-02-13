class Person2 {
    age: number;
    name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    hi() {
        return `Hey, ${this.name}! Welcome.`;
    }
}

const person2 = new Person2(23, 'Evanilson');
console.log(person2);
person2.hi();

// Extending 
class Citizen extends Person2 {
    nacionality: string;

    constructor(age: number, name: string, nacionality: string) {
        super(age, name);
        this.nacionality = nacionality;
    }
}

const citizen = new Citizen(23, 'Evanilson', 'Brazilian');
console.log(citizen);
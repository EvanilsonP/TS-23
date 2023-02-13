// Class

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

// A class in terms of OOP is a blueprint for creating objects.
class Person implements PersonInterface {
    // Properties are public by default
    // Private: Makes the property inaccessible outside the class.
    // Protected: Makes the property accessible only internally within the class or any class that extends it
    id: number
    name: string

    constructor(age: number, name: string) {
        // Constructor is a method that runs as soon as we instantiate a class
        this.id = age;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered.`;
    }
}

const me = new Person(1, 'Evanilson');
console.log(me); // output 1 and Evanilson

// Extending classes (subclasses)
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(1, 'Evan', 'Developer');

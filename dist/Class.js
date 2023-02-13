"use strict";
// Class
// A class in terms of OOP is a blueprint for creating objects.
class Person {
    constructor(age, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Evan', 'Developer');

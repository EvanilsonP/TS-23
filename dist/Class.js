"use strict";
// Class
// A class in terms of OOP is a blueprint for creating objects.
class Person {
    constructor(age, name) {
        // Constructor is a method that runs as soon as we instantiate a class
        this.id = age;
        this.name = name;
    }
}
const me = new Person(1, 'Evanilson');
console.log(me); // output 1 and Evanilson

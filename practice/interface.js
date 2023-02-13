"use strict";
const worker = {
    name: 'Evan',
    occupation: 'Developer',
    address: 'Dr. Lake buena vista',
    message() {
        return `${this.name} can't answer the phone right now.`;
    }
};
console.log(worker);

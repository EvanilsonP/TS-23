let address: [string, number, boolean] = ['Dr. Lake buena vista', 2, true];

function printInfo(street: string, number: number, status: boolean): any {
    console.log(`You live in ${street}}`);
    console.log(`Your house number is ${number}`);
    console.log(`The location is currently available for visits? ${status}`);
};

printInfo('Dr. Lake buena vista', 2, true);



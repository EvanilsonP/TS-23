// Interace
// You cannot use interface with Union type
// An interface is a contract that an entity should conform to. / It defines the syntax that any entity must adhere to.
interface UserInterace {
    // readonly: : capable of being viewed but not of being changed or deleted.
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterace = {
    id: 1,
    name: 'Evanilson',
    age: 23
};

// user1.id = 2;

// Interface with functions
interface MathFunc {
    (a: number, b: number): number
}

const add: MathFunc = (a: number, b: number): number => a + b;
const sub: MathFunc = (a: number, b: number): number => a - b;


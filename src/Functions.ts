// Functions
// Function is a 'piece' of code that we can use over and over again rather than writing it out multiples times;
function addNum(x: number, y: number): number {
    return x + y;
};

console.log(addNum(1, 2));

function log(message: string | number): void {
    console.log(message);
};

log('Hey there.');
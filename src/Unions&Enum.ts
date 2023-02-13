// Union
// Union type describes a value that can be one of several types
let productID: string | number = 22;
productID = 'Hello';

// Enum
// Enum is a special 'class' tha represents a group of constants
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
};

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
};

console.log(Direction1.Up);
console.log(Direction2.Left);
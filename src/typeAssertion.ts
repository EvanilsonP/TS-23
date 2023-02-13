// Type assertion
// Type assertion allows you to set the type of a value and tell the compiler not to infer it.
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
// The unknown type in TypeScript is used when you don’t know the type of a value yet, but you want to keep your code type-safe.
// It’s safer than any because TypeScript won’t let you use an unknown value directly unless you check or cast its type first.

let data: unknown;

data = "hello";    //  OK
data = 42;         //  OK
data = true;       // OK

let str: string = data; // Error: Type 'unknown' is not assignable to type 'string'
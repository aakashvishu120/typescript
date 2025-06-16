// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let mytuple : [number , boolean, string] = [52, false, "united states"]
console.log(mytuple)


//readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');   //cannot be pushed inside tuple due to readonly kwyword
console.log(ourReadonlyTuple)



//named tuple
const subject : [math : number, science : number] = [33 , 72]
console.log(subject)
// console.log(`math marks = ${math} and science marks = ${science}`)             //these are just labels cannot use their name in any place instead use subject[0] and subject[1]
console.log(`math marks = ${subject[0]} and science marks = ${subject[1]}`)



//destructuring tuple
const backlogs : [string, number, string, number] = ["physics", 15,  "chemistry", 18]
const [subject1, number1,subject2, number2] = backlogs

console.log(`${subject1} ${number1} and ${subject2} ${number2}`)

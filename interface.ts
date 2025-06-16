interface Person {
    name : string,
    age : number,
    isStudent : boolean
}

const obj1 : Person = {name : "aakash", age : 25 , isStudent : true}
console.log(obj1)


//inheriting an interface
interface college extends Person{
    studentId:  number,
    department : string
}

const obj2 : college = {name : "aditi", age : 24 , isStudent : true , studentId : 101 , department : "computer science"}
console.log(obj2)


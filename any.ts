//any is a type that disables type checking and effectively allows all types to be used.


let myvar : any = true
console.log("when boolean is assigned = ", myvar, typeof myvar)

myvar = "aakash"
console.log("when string is assigned = ",myvar, typeof myvar)

myvar =  50
console.log("when number is assigned = ",myvar, typeof myvar)
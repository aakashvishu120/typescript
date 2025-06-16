let arr : readonly string[]  = ["aakash", "aman"]
// arr.push("abhishek")          //inserting element not poosible in readonly array

console.log(arr)



//infer array
const mynumber = [1,2,3,4]
mynumber.push(5)
console.log(mynumber)

// mynumber.push("bansal classes")        //mynumber array treated as number type therfore string cannot be push
// console.log(mynumber)
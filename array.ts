const myarr : string[] = ["aakash", "priyanshu", "jaspal", "harsh"]
myarr.push("aman")
console.log("myarr = " , myarr)

// myarr.push(9)              //it will give error beacuse datatype not same
// console.log(myarr)

const myarr2 : number[] = [10,45,23,67]
myarr2.push(101, 102, 103)
console.log("myarr2" , myarr2);


const myarr3 : number[] = [91,92,93,99,96]
const myarr4 : number[] = myarr2.concat(myarr3)
console.log("myarr4 = " , myarr4)


// const myarr5 : number[] = myarr.concat(myarr2);  //string + number gives error
// console.log(myarr5)

// const myarr6 :string[] = myarr2.concat(myarr)          //number + string gives error
// console.log(myarr6)
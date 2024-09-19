//*****  Array  *****
// it used to store of element of same type or different in a continous memory allocation.

// creating array
// Using sqaure brackets
let num2:number[]=[5,10,15,20,25]
console.log("Array using []: ", num2)
console.log('array value access: ', num2[2])

//using array constructor
let num3:number[]=new Array(2,7,4,9,6,3)
console.log("Array using constructor: ", num3)
console.log("array length: ", num3.length)

// using array.of method
let names:string[] = Array.of('shubham', 'shiva', 'sai')
names.push('santosh')
console.log("Array using array.of : ", names)
names.pop()

// arrays iterating
function employeeNames(nam:string[]){
    for(let i=0; i<nam.length; i++){
        console.log("Name: ", nam[i])
    }
}
employeeNames(names)

// Map and filter
// double the each value of array.
let numbers: number[]=[2,4,5,7,1,8,6,3]
const doubleNum = (num:number[])=>{
    let double:number[] = num.map((elem:number)=> elem+elem)
    console.log("numbers: ",double)
}
doubleNum(numbers)
// filter out odd numbers
const filtNum = function(num:number[]){
    let filterArr:number[]=num.filter((elem:number)=> elem%2 !==0)
    console.log("Filter Number: ", filterArr)
}
filtNum(numbers)
// filter out string which has minimum char length 0f 4
function stringFilter(strArr:string[]){
    let newStringArr=strArr.filter((elem:string)=> elem.length>5)
    console.log("string array: ", newStringArr)
}
stringFilter(["william","john","michale", "tyson","starc"])
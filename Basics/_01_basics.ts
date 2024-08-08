let str:string="Hello World"
let num:number=10
console.log('String: ', str)
console.log("Number: ", num)

// number annotation on diff datatypes
//Integer
let num1:number=7
//float
let pie:number=3.14
// math
let square:number = Math.sqrt(4)
console.log("Number square: ", square)

// boolean
let isStarted:boolean = true
let isDone:boolean=false
console.log("isStarted: ", isStarted)
console.log("isDone: ", isDone)

// Example problems
function sum(a:number, b:number):number{
    return a+b
}

let result:number =sum(10, 20)
console.log("Sum of two: ", result, typeof(result))

const age:number=18
if(age>=18){
    console.log("Valid age for driving")
}
else{
    console.log("Not valid age")
}

// numbers is even or not
const isEven=(num:number):boolean=>{
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}
let res=isEven(8)
console.log("result of isEven: ",res)

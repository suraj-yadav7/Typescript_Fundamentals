/** Function type defining */
//Instead of letting TypeScript infer everything, you can explicitly define what a function accepts and what it returns.
function twoSum(a: number, b: number):number{
    const sum =a+b
    return sum
};
const res =  twoSum(10, 20)
console.log("Response: ", res)

/** Function Expression with types */
// When we store a function inside a variable, we can write type for it.
const greet: (str:string)=>string = (str)=>{
    return `Hello ${str} Welcome!`
}
const resGreet =greet( "RajKumar")
console.log("Greet Res: ", resGreet)

/** CallBack Function */
// A callback function is a function which is passed as argument to another function and called it later.
function maxNum(arr:number[], cb:(arrVal:number[])=> number): number{
    if(arr.length<1){
        return 0
    }
    return cb(arr)
};

const cb = (arr:number[]):number =>{
    let num = -Infinity
    arr.forEach((n) => {
        if(n>=num) num = n
    })
    return num
};

const resMax = maxNum([4,1,9,2,7], cb)
console.log("Max-Number Result: ", resMax)

/** Higher-Order Function */
//A higher-order function is: A function that takes another function as an argument OR returns a function.
function multiplier(fact:number){
    return function mul(x : number):number{
        return x*fact
    }
};

const double = multiplier(2)
const doubleRes = double(5)
console.log("Response: ",  doubleRes)

/** Function with 'types' and 'interface' */
//We can define the function signature using type or interface.
type MulType = (a:number, b:number)=>number
interface DivType {
    (a:number, b:number):number
}

function calculator(a:number, b:number, mulFun:MulType, divFun:DivType):number[]{
    const resMul = mulFun(a, b)
    const resDiv = divFun(a, b)
    return [resMul, resDiv]
};

const mulFun:MulType = (a, b) => {
    return a*b
};
const divFun:DivType = (a, b) => {
    return a/b
};

const calRes = calculator(20, 10, mulFun, divFun)
console.log("Calculator Response: ", calRes)
// ***** Any *****
// The any type is the most flexible type in typescript. 
// It essentially turn off all type checking for the variables or expressions. 
let favNum:number = 7
// not possible
// favNum='seven'

let num2:any=10
num2='ten'
num2=true
console.log("num any: ", num)


// ***** unknown *****
// The unknow is a safer alternative to any because it still enforce type checking  and type safety.
// Varibales of type  unknow can hold values of any type, but you must perform type checking and 
// type assertions before using them in specific ways.

let num3:unknown=9
num3=true
num3='nine'
if(typeof num1 === 'string'){
    console.log("It is string: ", num1)
} 
else if(typeof num1 === 'boolean'){
    console.log("It is boolean: ", num1)
}

async function fetchData(): Promise<unknown>{
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let result = await response.json()
    return result
}

const callFetchData=async()=>{
    let fetchResult=await fetchData()
    if(typeof fetchResult === 'object'){
        console.log("Response is object", fetchResult)
    }
    else{
        console.log("repsonse is not object", fetchResult)
    }
};

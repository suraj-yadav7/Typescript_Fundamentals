// ***** Function declaration  *****
// It is the looks same like js function, only thing is we need to define parameter type.
function greet(name:string, empId:number){
    console.log(`Hi ${name} welcome to this typescript course, your id is ${empId}.`)
}
greet('suraj', 46)

//**** Arrow function  *****
const newEmp=(dept:string, empId:number)=>{
    console.log(`Your dept name is ${dept} and employee id is ${empId}.`)
}
newEmp('backend',98345)

// ***** Function with Return type  *****
const palindrome=(str:string):boolean =>{
    let str2:string=str.split('').reverse().join('')
    if(str2 == str){
        return true
    }
    else{
        return false
    }
}
let r= palindrome('madama')
console.log("palindrome result: ", r)

// Average of given array number
function avgArrNum(arr:number[]):number{
    let sum=arr.reduce((acc, elem)=> acc +elem, 0)
    return sum/arr.length
}
let r1=avgArrNum([2,4,6,8])
console.log("Average of array number: ", r1)


// **** Default parameter *****
function student(name:string, id:number=1){
    console.log(`Welcome new student ${name}, ${id} in the class`)
}
student('vinod')

// ***** Optional Parameter *****
function grades(name:string, marks?:number){
    if(marks){
        console.log(`Student named ${name} got good marks ${marks}.`)
    }
    else{
        console.log(`This student ${name} don't have marks.`)
    }
}

grades('amjad',90)
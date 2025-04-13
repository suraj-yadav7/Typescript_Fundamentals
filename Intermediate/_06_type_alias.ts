/** Types Alias */
// It is used to define the shape of the object. It also used to define the Union, Primitive, Tuples
//Inteface don't support union, tuples, primitive(string, number) on same variable.
// types don't support merging of two types of same name in the same scope.

type Consumer = {
    id: string,
    name: string,
    age?: number,    //It is optinal
    occupation:string
}

function consumerDetails(details:Consumer){
    console.log("Consumer Details: ", details)
}
const consObj = {
    id:"3424ds45",
    name:"dhananjaye",
    occupation:"Investment Banker"
}
consumerDetails(consObj)

/** type in Union */
type empID = string | number
type status = "pending" | "approved" | "rejected"

/** type in Tuple */
type score = [number, number, string]

function studentScore (scr:score){
    if(scr.length === 3){
        const marks = scr[0]
        const grade = scr[1]
        const result = scr[2]
        const str = `Student total marks is ${marks} with grades ${grade} and \n overall result is ${result}.`
        return str
    }else{
        return 'Need exact three len array.'
    }
};
const scrArr:score = [550, 8, "passed"]
const res = studentScore(scrArr)
console.log("Respone: ", res)

/** Extending of two different types */
type device = {
    ram:number,
    cpu:string,
    gpu:number
}
type mobile= device & {
    screen:string,
    gen5g:boolean
};
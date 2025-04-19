/** Generics */
// Generics in TypeScript enable writing code that can work with a variety of data types while maintaining type safety.
// They allow the creation of reusable components, functions, and data structures without sacrificing type checking.
function primeNum<T>(arg: T):T{
    return arg
};

const res = primeNum<number>(8)
console.log("Generic res: ", res)

/** Generics in class */
class Box<T>{
    private val:T
    constructor(val:T){
        this.val = val
    }

    getValue():T{
        return this.val
    }
};

const boxInstan = new Box <string>("es6")
const valRes = boxInstan.getValue()
console.log("Class Method res: ", valRes)


/** Generics with Interfaces */
interface Controller<S, N>{
    name:S
    price:N,
};

const cont: Controller<string, number> = {name:"strellairs", price:3500}
console.log("Controller Details: ", cont)

/** Generics Constraints with extends*/
interface ageCheck{
    age:number
};

function userDetails<T extends ageCheck>(val : T):T {
    let userAge  = val.age
    console.log("Age: ", userAge)
    return val
};

const useObj = {name:"jon snow", age:25}
const userRes = userDetails(useObj)
console.log("Constraints res: ", userRes)
/* Objects*/
// Object are used to represent the data in key-value pair, each key in the object is string that maps a value.
let employee:{
    empId:number;
    name:string;
    dept:string;
    tean?:string;
    project:{role:string, type:string}
}={
    empId:104,
    name:"kranthi",
    dept:"web dev",
    project:{
        role:'backend',
        type:"ecommerce"
    }
}

// accessing object
console.log("Employee: ", employee)

// accessing nested objects
console.log("project role: ", employee.project.role)

// updating through error for wrong datatype
// employee.project.type=942385

//***********************************************************************************************************************
//***********************************************************************************************************************

/** Type Aliases */
// It helps to create the object types for each element of the object. It helps to avolid write same type again and again.
type Laptop={
    name:string;
    brand:string;
    price:number;
    quantity:number;
    model?:string;
}

const laptop:Laptop = {
    name:'nitro',
    brand:"acer",
    price:8000,
    quantity:5
}
laptop.quantity=7
console.log("laptop object : ", laptop)

// example program
const totalPrice = (lap:Laptop):number=>{
    let totalPrice=lap.price * lap.quantity
    return totalPrice
}
let res: number = totalPrice(laptop)
console.log("Laptop Total Price: ", res)

//***********************************************************************************************************************
//***********************************************************************************************************************

/** Call Signature */
// The function call signature refers to the defination or decalaration of a function, which includes the function's name, parameters and return type.
// It defines structure and type information of a function  without including  the functions implemetation or body.

type Student={
    name:string;
    age:Number;
    gender:string;
    greet:(country:string) => string
}

const student1:Student={
    name:"shiva",
    age:25,
    gender:"male",
    greet : (place):string => `Hello my name is ${student1.name}, i'm ${student1.age} old and i'm from ${place}`
};
console.log("Student object: ", student1)
console.log("Student greet: ", student1.greet("hyderabad"))
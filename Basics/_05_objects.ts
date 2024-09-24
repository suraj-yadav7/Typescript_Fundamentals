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

/** INTERFACE */
// Interface is similar to 'type alias'. It is introduced in latest version of typescript.
// Object properties type can be defined with the help of interface.
interface Bike {
    name:string;
    model:number;
    cc:number
}
const bike:Bike={
    name:"Duke",
    model:2024,
    cc:200
}

function bikeDetails(bikeVal:Bike){
    const {cc, name} = bikeVal
    if(cc >= 200){
        console.log("It is a powerful machine: ", name)
    }
    else{
        console.log("It is a Mileage driven bike: ", name)
    }
}
// calling function
bikeDetails(bike)

//***********************************************************************************************************************
//***********************************************************************************************************************

/** Call Signature */
// The function call signature refers to the defination or declaration of a function, which includes the function's name, parameters and return type.
// It defines structure and type information of a function without including the functions implemetation or body.

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
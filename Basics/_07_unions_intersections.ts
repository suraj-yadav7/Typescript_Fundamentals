/** UNION */
// Union types allow you to specify that a variable can hold values of multiple types. we use | (pipe) symbol to define a union type.
// In typescript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties.
// Failure to do so will result in a type error during compilation.

// function to handle different types of datatypes.
const unionCheck = (val : string | number | boolean) : string | number | boolean =>{
    if(typeof val === "number"){
        return val*2
    }
    else if(typeof val === "string"){
        return val.toUpperCase()
    }
    else if(typeof val === "boolean"){
        return !val
    }
    else{
        return "Invalid input type."
    }
}
let result = unionCheck(false)
console.log("Union check: ", result)

//******************************************************************************************/
//******************************************************************************************/

/** INTERSECTION */
// Intersection allow you to combine multiple types into a single type.You use the & (ampersand) symbol to define an intersection type.

// problem get user name and city
// type define
type user={
    name:string;
    age:number;
    profession:string;
}

type location={
    area:string;
    city:string;
    state:string;
    pincode:number
}

type userDetails= user & location

// object define
const userVal:user={
    name:'sakshi',
    age:24,
    profession:"developer"
}
const userLocation:location={
    area:"123 baker street",
    city:"Hyderabad",
    state:"Telangana",
    pincode:580033
}

// function
const getUserDetails=(userVal:user, location:location)=>{
    const {name} = userVal
    const {city} = location
    // this will throw error at calling function variable
    // return `UserName is ${name} and he is from ${city}`
    return {...userVal, ...location}
}
let result2: user & location = getUserDetails(userVal, userLocation)
console.log("details: ", result2)


/** GENERICS */
// Generics allow user to create a reusable components or functions that can work with multiple data types.

const logAndReturn=<T>(val:T):T =>{
    console.log("Value passed in the argument is ", typeof(val))
    return val
}

// calling function
let result3 = logAndReturn<string>("Engineer")
console.log("Generics: ", result3)
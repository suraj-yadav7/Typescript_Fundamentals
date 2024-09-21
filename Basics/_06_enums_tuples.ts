/** ENUMS */
// Enums are commonly used to represent a set of a related values and choose  one value  from multiple options.
// enums provide a convenient way to define a set of name value associate them  with  specific meanings.
// when enum constant are explicitly not assigned any value then automatically it will be assigned values from 0 to n.

// enum datatype
enum Roles{
    user="user",
    admin="admin"
}
// alias
type LoginDetails={
    name?:string;
    email:string;
    password:string;
    role:Roles
}
// objects
const user1:LoginDetails={
    name:"shubham",
    email:"shubham3@gmail.com",
    password:"123abcd",
    role:Roles.user
}

const user2:LoginDetails={
    email:'admin@gmail.com',
    password:"admin123",
    role:Roles.admin
}
// function check isadmin or not.
const isAdmin = (userData:LoginDetails):boolean=>{
    if(userData.role === "admin"){
        return true
    }
    else{
        return false
    }
}
// let result:boolean = isAdmin(user2)
// console.log("isAdmin: ", result)


/** ********************************************************************************************** */
/** ********************************************************************************************** */

/** TUPLES */
// Tuples are data stucture which allow you to store  fixed-size of different types of elements.
// tuples and array are similar only diff is tuple have fixed size elements into defined while creation.

// alias
type PersonInfo = readonly [string, number, boolean]

const person1:PersonInfo = ["akhil", 26, true]
const person2:PersonInfo = ["abhishek", 25, false]

// person2.push("Hr")   not possible because tuple type is defined readonly

// function check licence
const isEligible = (person:PersonInfo):string =>{
    const [name, age, licenceValid] = person
    let res = licenceValid === true? `${name} age is ${age} and he has valid driving licence ${licenceValid}`:
    `${name} age is ${age} and he don't have valid driving licence ${licenceValid}`
    return res
}
let result2 = isEligible(person1)
console.log(result2)

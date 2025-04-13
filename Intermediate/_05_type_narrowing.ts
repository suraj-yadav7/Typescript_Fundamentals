/** Type Narrowing */

/** Type narrowing is when TypeScript analyzes your code and refines a variable’s type
 *  based on checks you perform (e.g., typeof, instanceof, etc.).
 * This allows you to safely access members of that type. */

function printValue (val: string | number){
    if(typeof val === "string"){
        return val.toUpperCase()
    }else{
        return Math.sqrt(val)
    }
};
const response  = printValue("typescript")
console.log("Response: ", response)


// 'in' Operator
// Used for checking if a property exists on an object.
type stringObj = {
	name:string,
	tech_stack:string
};
type numberObj = {
	num1:number,
	num2:number
}

function typeNarrowing (val : stringObj | numberObj){
	if('name' in val && typeof val.name === "string" ){
		return `i'm ${val.name} and my tech stack is ${val.tech_stack}.`
	}
    else if('num1' in val && typeof val.num1 === "number"){
	const power = val.num1**val.num2
	return power
	}
};

let strObj = {
	name:"shubham",
	tech_stack:"java"
};

let numObj = {
	num1:2,
	num2:5
};

const result = typeNarrowing(numObj);
console.log("Result of in with typeof: ", result)
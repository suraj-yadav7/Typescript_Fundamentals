/** Type Narrowing */
/** Type narrowing is when TypeScript analyzes your code and refines a variable’s type
 *  based on checks you perform (e.g., typeof, instanceof, etc.).
 * This allows you to safely access members of that type. */
function printValue(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return Math.sqrt(val);
    }
}
;
var response = printValue("typescript");
console.log("Response: ", response);
function typeNarrowing(val) {
    if ('name' in val && typeof val.name === "string") {
        return "i'm ".concat(val.name, " and my tech stack is ").concat(val.tech_stack, ".");
    }
    else if ('num1' in val && typeof val.num1 === "number") {
        var power = Math.pow(val.num1, val.num2);
        return power;
    }
}
;
var strObj = {
    name: "shubham",
    tech_stack: "java"
};
var numObj = {
    num1: 2,
    num2: 5
};
var result = typeNarrowing(numObj);
console.log("Result of in with typeof: ", result);

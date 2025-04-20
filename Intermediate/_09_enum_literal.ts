/** ENUMS (enumerations) */
/**
 * Enums are used to define a set of named constants. You can use them to make your code more readable and maintainable,
 * especially when working with a group of related values. It helps to centrailize the constant.
 */
enum Roles{
    Admin = "ADMIN",
    User  = "USER",
    Viewer = "VIEWER"
};

function userRoleCheck (roleVal : Roles){
    if(roleVal === Roles.Admin){
        return "You are ADMIN, Full Access."
    }else if(roleVal === Roles.User){
        return "You are USER, Partial Access."
    }else{
        return "Readonly access."
    }
};

const roleRes = userRoleCheck(Roles.Admin)
const roleResTwo = userRoleCheck(Roles["User"])
console.log("Result: ", roleRes )
console.log("Result Two: ", roleResTwo )

/** Reverse Mapping only for numerics */
enum Status{
    success = 1,
    failure = 2
};
console.log("Reverse Mapping: ", Status[1])


/** LITERAL TYPES*/
/**
 * Literal types allow you to specify exact values a variable can have, not just their general types.
 */

type Direction = "up" | "down" | "left" | "right"

function directionCheck(dirVal : Direction){
    if(dirVal === "right"){
        return "You'r absolutely right"
    }
    return "You are wrong"
};

const dirRes = directionCheck("right")
console.log("Direction : ", dirRes)


type HtttpCode = 200 | 400 | 500
function apiResponse(status:string):HtttpCode{
    switch(status){
        case "success": return 200
        case "failed" : return 400
        default: return 500
    }
};

const apiRes = apiResponse("success")
console.log("API-RES: ", apiRes)
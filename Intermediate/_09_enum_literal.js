/** ENUMS (enumerations) */
/**
 * Enums are used to define a set of named constants. You can use them to make your code more readable and maintainable,
 * especially when working with a group of related values. It helps to centrailize the constant.
 */
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Viewer"] = "VIEWER";
})(Roles || (Roles = {}));
;
function userRoleCheck(roleVal) {
    if (roleVal === Roles.Admin) {
        return "You are ADMIN, Full Access.";
    }
    else if (roleVal === Roles.User) {
        return "You are USER, Partial Access.";
    }
    else {
        return "Readonly access.";
    }
}
;
var roleRes = userRoleCheck(Roles.Admin);
var roleResTwo = userRoleCheck(Roles["User"]);
console.log("Result: ", roleRes);
console.log("Result Two: ", roleResTwo);
/** Reverse Mapping only for numerics */
var Status;
(function (Status) {
    Status[Status["success"] = 1] = "success";
    Status[Status["failure"] = 2] = "failure";
})(Status || (Status = {}));
;
console.log("Reverse Mapping: ", Status[1]);
function directionCheck(dirVal) {
    if (dirVal === "right") {
        return "You'r absolutely right";
    }
    return "You are wrong";
}
;
var dirRes = directionCheck("right");
console.log("Direction : ", dirRes);
function apiResponse(status) {
    switch (status) {
        case "success": return 200;
        case "failed": return 400;
        default: return 500;
    }
}
;
var apiRes = apiResponse("success");
console.log("API-RES: ", apiRes);

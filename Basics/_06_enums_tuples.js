/** ENUMS */
// Enums are commonly used to represent a set of a related values and choose  one value  from multiple options.
// enums provide a convenient way to define a set of name value associate them  with  specific meanings.
// when enum constant are explicitly not assigned any value then automatically it will be assigned values from 0 to n.
// enum datatype
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
// objects
var user1 = {
    name: "shubham",
    email: "shubham3@gmail.com",
    password: "123abcd",
    role: Roles.user
};
var user2 = {
    email: 'admin@gmail.com',
    password: "admin123",
    role: Roles.admin
};
// function check isadmin or not.
var isAdmin = function (userData) {
    if (userData.role === "admin") {
        return true;
    }
    else {
        return false;
    }
};
var person1 = ["akhil", 26, true];
var person2 = ["abhishek", 25, false];
// person2.push("Hr")   not possible because tuple type is defined readonly
// function check licence
var isEligible = function (person) {
    var name = person[0], age = person[1], licenceValid = person[2];
    var res = licenceValid === true ? "".concat(name, " age is ").concat(age, " and he has valid driving licence ").concat(licenceValid) :
        "".concat(name, " age is ").concat(age, " and he don't have valid driving licence ").concat(licenceValid);
    return res;
};
var result2 = isEligible(person1);
console.log(result2);

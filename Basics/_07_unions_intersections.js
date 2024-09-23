/** UNION */
// Union types allow you to specify that a variable can hold values of multiple types. we use | (pipe) symbol to define a union type.
// In typescript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties.
// Failure to do so will result in a type error during compilation.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function to handle different types of datatypes.
var unionCheck = function (val) {
    if (typeof val === "number") {
        return val * 2;
    }
    else if (typeof val === "string") {
        return val.toUpperCase();
    }
    else if (typeof val === "boolean") {
        return !val;
    }
    else {
        return "Invalid input type.";
    }
};
var result = unionCheck(false);
console.log("Union check: ", result);
// object define
var userVal = {
    name: 'sakshi',
    age: 24,
    profession: "developer"
};
var userLocation = {
    area: "123 baker street",
    city: "Hyderabad",
    state: "Telangana",
    pincode: 580033
};
// function
var getUserDetails = function (userVal, location) {
    var name = userVal.name;
    var city = location.city;
    // this will throw error at calling function variable
    // return `UserName is ${name} and he is from ${city}`
    return __assign(__assign({}, userVal), location);
};
var result2 = getUserDetails(userVal, userLocation);
console.log("details: ", result2);
/** GENERICS */
// Generics allow user to create a reusable components or functions that can work with multiple data types.
var logAndReturn = function (val) {
    console.log("Value passed in the argument is ", typeof (val));
    return val;
};
// calling function
var result3 = logAndReturn("Engineer");
console.log("Generics: ", result3);

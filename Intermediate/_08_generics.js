/** Generics */
// Generics in TypeScript enable writing code that can work with a variety of data types while maintaining type safety.
// They allow the creation of reusable components, functions, and data structures without sacrificing type checking.
function primeNum(arg) {
    return arg;
}
;
var res = primeNum(8);
console.log("Generic res: ", res);
/** Generics in class */
var Box = /** @class */ (function () {
    function Box(val) {
        this.val = val;
    }
    Box.prototype.getValue = function () {
        return this.val;
    };
    return Box;
}());
;
var boxInstan = new Box("es6");
var valRes = boxInstan.getValue();
console.log("Class Method res: ", valRes);
var cont = { name: "strellairs", price: 3500 };
console.log("Controller Details: ", cont);
function userDetails(val) {
    var userAge = val.age;
    console.log("Age: ", userAge);
    return val;
}
var useObj = { name: "jon snow", age: 25 };
var userRes = userDetails(useObj);
console.log("Constraints res: ", userRes);

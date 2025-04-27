/** Function type defining */
//Instead of letting TypeScript infer everything, you can explicitly define what a function accepts and what it returns.
function twoSum(a, b) {
    var sum = a + b;
    return sum;
}
;
var res = twoSum(10, 20);
console.log("Response: ", res);
/** Function Expression with types */
// When we store a function inside a variable, we can write type for it.
var greet = function (str) {
    return "Hello ".concat(str, " Welcome!");
};
var resGreet = greet("RajKumar");
console.log("Greet Res: ", resGreet);
/** CallBack Function */
// A callback function is a function which is passed as argument to another function and called it later.
function maxNum(arr, cb) {
    if (arr.length < 1) {
        return 0;
    }
    return cb(arr);
}
;
var cb = function (arr) {
    var num = -Infinity;
    arr.forEach(function (n) {
        if (n >= num)
            num = n;
    });
    return num;
};
var resMax = maxNum([4, 1, 9, 2, 7], cb);
console.log("Max-Number Result: ", resMax);
/** Higher-Order Function */
//A higher-order function is: A function that takes another function as an argument OR returns a function.
function multiplier(fact) {
    return function mul(x) {
        return x * fact;
    };
}
;
var double = multiplier(2);
var doubleRes = double(5);
console.log("Response: ", doubleRes);
function calculator(a, b, mulFun, divFun) {
    var resMul = mulFun(a, b);
    var resDiv = divFun(a, b);
    return [resMul, resDiv];
}
;
var mulFun = function (a, b) {
    return a * b;
};
var divFun = function (a, b) {
    return a / b;
};
var calRes = calculator(20, 10, mulFun, divFun);
console.log("Calculator Response: ", calRes);

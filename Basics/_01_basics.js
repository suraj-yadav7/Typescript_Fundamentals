// sum of two numbers
function sum(a, b) {
    var sum = a + b;
    return sum;
}
var a = 10;
var b = 20;
var result = sum(a, b);
console.log("sum: ", result);
var isEven = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
var res = isEven(8);
console.log("result of isEven: ", res);
var num = 40890348904434323345345344530n;
console.log("Bigint: ", num);

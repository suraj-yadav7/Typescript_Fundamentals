//*****  Array  *****
// it used to store of element of same type or different in a continous memory allocation.
// creating array
// Using sqaure brackets
var num2 = [5, 10, 15, 20, 25];
console.log("Array using []: ", num2);
console.log('array value access: ', num2[2]);
//using array constructor
var num3 = new Array(2, 7, 4, 9, 6, 3);
console.log("Array using constructor: ", num3);
console.log("array length: ", num3.length);
// using array.of method
var names = Array.of('shubham', 'shiva', 'sai');
names.push('santosh');
console.log("Array using array.of : ", names);
names.pop();
// arrays iterating
function employeeNames(nam) {
    for (var i = 0; i < nam.length; i++) {
        console.log("Name: ", nam[i]);
    }
}
employeeNames(names);
// Map and filter
// double the each value of array.
var numbers = [2, 4, 5, 7, 1, 8, 6, 3];
var doubleNum = function (num) {
    var double = num.map(function (elem) { return elem + elem; });
    console.log("numbers: ", double);
};
doubleNum(numbers);
// filter out odd numbers
var filtNum = function (num) {
    var filterArr = num.filter(function (elem) { return elem % 2 !== 0; });
    console.log("Filter Number: ", filterArr);
};
filtNum(numbers);
// filter out string which has minimum char length 0f 4
function stringFilter(strArr) {
    var newStringArr = strArr.filter(function (elem) { return elem.length > 5; });
    console.log("string array: ", newStringArr);
}
stringFilter(["william", "john", "michale", "tyson", "starc"]);

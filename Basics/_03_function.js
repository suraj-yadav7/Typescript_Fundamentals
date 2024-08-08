// ***** Function declaration  *****
// It is the looks same like js function, only thing is we need to define parameter type.
function greet(name, empId) {
    console.log("Hi ".concat(name, " welcome to this typescript course, your id is ").concat(empId, "."));
}
greet('suraj', 46);
//**** Arrow function  *****
var newEmp = function (dept, empId) {
    console.log("Your dept name is ".concat(dept, " and employee id is ").concat(empId, "."));
};
newEmp('backend', 98345);
// ***** Function with Return type  *****
var palindrome = function (str) {
    var str2 = str.split('').reverse().join('');
    if (str2 == str) {
        return true;
    }
    else {
        return false;
    }
};
var r = palindrome('madama');
console.log("palindrome result: ", r);
// Average of given array number
function avgArrNum(arr) {
    var sum = arr.reduce(function (acc, elem) { return acc + elem; }, 0);
    return sum / arr.length;
}
var r1 = avgArrNum([2, 4, 6, 8]);
console.log("Average of array number: ", r1);
// **** Default parameter *****
function student(name, id) {
    if (id === void 0) { id = 1; }
    console.log("Welcome new student ".concat(name, ", ").concat(id, " in the class"));
}
student('vinod');
// ***** Optional Parameter *****
function grades(name, marks) {
    if (marks) {
        console.log("Student named ".concat(name, " got good marks ").concat(marks));
    }
    else {
        console.log("This student ".concat(name, " don't have marks."));
    }
}
grades('amjad', 90);

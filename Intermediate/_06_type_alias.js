/** Types Alias */
// It is used to define the shape of the object. It also used to define the Union, Primitive, Tuples
//Inteface don't support union, tuples, primitive(string, number) on same variable.
// types don't support merging of two types of same name in the same scope.
function consumerDetails(details) {
    console.log("Consumer Details: ", details);
}
var consObj = {
    id: "3424ds45",
    name: "dhananjaye",
    occupation: "Investment Banker"
};
consumerDetails(consObj);
function studentScore(scr) {
    if (scr.length === 3) {
        var marks = scr[0];
        var grade = scr[1];
        var result = scr[2];
        var str = "Student total marks is ".concat(marks, " with grades ").concat(grade, " and \n overall result is ").concat(result, ".");
        return str;
    }
    else {
        return 'Need exact three len array.';
    }
}
;
var scrArr = [550, 8, "passed"];
var res = studentScore(scrArr);
console.log("Respone: ", res);

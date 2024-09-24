/** CLASS */
// In OOPs a class is blue print which is used to create objects.
// It name should start with capital letter and subsequent also capital letter.
var Persons = /** @class */ (function () {
    function Persons(name, gender, hobbies) {
        this.name = name,
            this.gender = gender,
            this.hobbies = hobbies;
    }
    // methods
    Persons.prototype.greet = function () {
        console.log("Hi ".concat(this.name, " welcome, we like your hobbies ").concat(this.hobbies));
    };
    Persons.prototype.totalSalary = function (exp, skills) {
        var sal = exp * skills * 1000;
        return sal;
    };
    return Persons;
}());
// instance of class or object
var p1 = new Persons("Dhanu", "male", ["reading", "drawing"]);
p1.greet();
console.log("Person1: ", p1);
var p2 = new Persons("prakash", "male", ["cricket", "swimming"]);
console.log("Person2: ", p2);
var res = p2.totalSalary(5, 8);
console.log("Person salary: ", res);

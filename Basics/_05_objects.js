/* Objects*/
// Object are used to represent the data in key-value pair, each key in the object is string that maps a value.
var employee = {
    empId: 104,
    name: "kranthi",
    dept: "web dev",
    project: {
        role: 'backend',
        type: "ecommerce"
    }
};
// accessing object
console.log("Employee: ", employee);
// accessing nested objects
console.log("project role: ", employee.project.role);
var laptop = {
    name: 'nitro',
    brand: "acer",
    price: 8000,
    quantity: 5
};
laptop.quantity = 7;
console.log("laptop object : ", laptop);
// example program
var totalPrice = function (lap) {
    var totalPrice = lap.price * lap.quantity;
    return totalPrice;
};
var res = totalPrice(laptop);
console.log("Laptop Total Price: ", res);
var bike = {
    name: "Duke",
    model: 2024,
    cc: 200
};
function bikeDetails(bikeVal) {
    var cc = bikeVal.cc, name = bikeVal.name;
    if (cc >= 200) {
        console.log("It is a powerful machine: ", name);
    }
    else {
        console.log("It is a Mileage driven bike: ", name);
    }
}
// calling function
bikeDetails(bike);
var student1 = {
    name: "shiva",
    age: 25,
    gender: "male",
    greet: function (place) { return "Hello my name is ".concat(student1.name, ", i'm ").concat(student1.age, " old and i'm from ").concat(place); }
};
console.log("Student object: ", student1);
console.log("Student greet: ", student1.greet("hyderabad"));

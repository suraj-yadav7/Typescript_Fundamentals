/** Inheritance */
// As we know it will inherit the properities, methods, attributes of parent class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
// Child class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    // Override the method from the base class
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks."));
    };
    Dog.prototype.fetch = function () {
        console.log("".concat(this.name, " is fetching the ball!"));
    };
    return Dog;
}(Animal));
;
// Create an instance of the derived class
var dog = new Dog('Buddy', 'Golden Retriever');
// Calling the overridden method
dog.speak();
dog.fetch();

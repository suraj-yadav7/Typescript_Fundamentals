/** ABSTRACTION */
// Abstraction in (OOP) is the process of hiding the complex implementation details of a system and exposing only the essential features or behaviors.
//It allows you to focus on what an object does rather than how it does it. By abstracting details,
//you provide a simplified interface to interact with the object, while keeping the internal workings hidden.
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.display = function () {
        console.log("This is abstact SHAPE class");
    };
    return Shape;
}());
// Concrete class (inherits from Shape and provides implementation for abstract method)
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Provide implementation for the abstract method
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var reactangel = new Rectangle(5, 10);
reactangel.display();
console.log("Area: ", reactangel.calculateArea());

/** ABSTRACTION */
// Abstraction in (OOP) is the process of hiding the complex implementation details of a system and exposing only the essential features or behaviors.
//It allows you to focus on what an object does rather than how it does it. By abstracting details,
//you provide a simplified interface to interact with the object, while keeping the internal workings hidden.

abstract class Shape{
    // abstract method(on implementatin need to provided by subclasses)
    abstract calculateArea():number

    public display():void{
        console.log("This is abstact SHAPE class")
    }
}

// Concrete class (inherits from Shape and provides implementation for abstract method)
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Provide implementation for the abstract method
    public calculateArea(): number {
        return this.width * this.height;
    }
}

const reactangel = new Rectangle(5, 10)
reactangel.display()
console.log("Area: ", reactangel.calculateArea())
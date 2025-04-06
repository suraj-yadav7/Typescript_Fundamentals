/** Inheritance */
// As we know it will inherit the properities, methods, attributes of parent class.

// Parent class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

  // Child class
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    // Override the method from the base class
    speak(): void {
        console.log(`${this.name} barks.`);
    }

    fetch(): void {
        console.log(`${this.name} is fetching the ball!`);
    }
};

// Create an instance of the derived class
const dog = new Dog('Buddy', 'Golden Retriever');

// Calling the overridden method
dog.speak();

dog.fetch();

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
    }
}

const dog1 = new Dog("Buddy");
const cat1 = new Cat("Misty");

dog1.makeSound(); 
cat1.makeSound(); 

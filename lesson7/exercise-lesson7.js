class Animal {
    species;
    sound;

    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.species} says: ${this.sound}`);
    }

    describe() {
      console.log(`This is a ${this.species}. It makes a '${this.sound}' sound.`);
    }
  }
 
  const dog = new Animal("Dog", "Woof");
  const cat = new Animal("Cat", "Meow");
  
  dog.makeSound();
  dog.describe();
  
  cat.makeSound();
  cat.describe();
  


  //another one
  class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return a / b;
    }
  }
  
  console.log(Calculator.add(10, 5)); 
  console.log(Calculator.subtract(10, 5)); 
  console.log(Calculator.multiply(10, 5)); 
  console.log(Calculator.divide(10, 2)); 
  console.log(Calculator.divide(10, 0)); 

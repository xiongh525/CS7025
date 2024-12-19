// Define a class
class Person {
    // Constructor to initialize the object
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, and I come from ${this.country}.`);
    }
  
    haveBirthday() {
      this.age += 1;
      console.log(`Happy Birthday! I am gonna be ${this.age} years old next year.`);
    }
  }

  const person1 = new Person("Haiqi", 24, "China");
  
  console.log("Name:", person1.name);
  console.log("Age:", person1.age);
  console.log("Country:", person1.country);
  
  person1.greet();
  person1.haveBirthday();
  
  const person2 = new Person("Bella", 25, "America");
  person2.greet();
  
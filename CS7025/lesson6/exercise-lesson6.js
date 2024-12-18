
let person = {
    name: "Haiqi",
    age: 24,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  console.log(person.name);
  console.log(person["age"]);

  person.greet();
  

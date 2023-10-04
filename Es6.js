/* Classes and therefore *Constructor functions* in JavaScript
   are said to be **Blueprints** for creating instances (objects) from.
   
   *** So, the logic is pretty simple, first create a constructor, and then 
   *** use it for creating instances.
 */

/* In order for that *Constructor* to be usefull, it has to delegate some sort of
 * inherited properties and methods to every instance.
 */

/*
 * Let's asume that we want to abstract a Person from the real world
 * into an abstraction, that will play the role of a Person in our abstract world.
 */

// Constructor function
function Person(name, age) {
  // Adding properties,
  // that will be inherited by every instance.
  // Pease investigate the ***this*** keyword and ***context*** of it!
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function () {
  // Investigate the topic of ***template literals***!
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Let's rewrite the before es6 syntax with es6 syntax and introduction of Classes.

// Creating instances of Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.

// Homework assignemnt
/**
 * Convert the following code into ES6 syntax and create few instances!
 */

// function Computer(manufacturer, model) {
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.isPoweredOn = false;
// }

// Computer.prototype.powerOn = function () {
//   if (!this.isPoweredOn) {
//     this.isPoweredOn = true;
//     // Please pay attention on operation adding implemented on string!
//     // Investigate the topic - Operations in JavaScript!
//     console.log(this.manufacturer + " " + this.model + " is now powered on.");
//   } else {
//     console.log(
//       this.manufacturer + " " + this.model + " is already powered on."
//     );
//   }
// };

// Computer.prototype.powerOff = function () {
//   if (this.isPoweredOn) {
//     this.isPoweredOn = false;
//     console.log(this.manufacturer + " " + this.model + " is now powered off.");
//   } else {
//     console.log(
//       this.manufacturer + " " + this.model + " is already powered off."
//     );
//   }
// };

class Computer {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.isPoweredOn = false;
  }

  powerOff = () => {
    if (this.isPoweredOn) {
      this.isPoweredOn = false;
      console.log(`${this.manufacturer} ${this.model} is now powered off.`);
    } else {
      console.log(`${this.manufacturer} ${this.model} is already powered off.`);
    }
  }

  powerOn = () => {
    if (!this.isPoweredOn) {
      this.isPoweredOn = true;
      console.log(`${this.manufacturer} ${this.model} is now powered on.`);
    } else {
      console.log(`${this.manufacturer} ${this.model} is already powered on.`);
    }
  }
}
const computer1 = new Computer('MacBook', 'Pro')
computer1.powerOn()
const computer2 = new Computer('MacBook', 'Air')
computer2.powerOff()
const computer3 = new Computer('Asus', 'Zenbook')
computer3.powerOn()

console.log("kakkoi isha desu");
// alert("sushi ocha to mizu");
// lecture 1 - variables
let username="arpit";
console.log(username);
username="pankaj";
console.log(username);
const country="india"; // const needs to be declared and asigned at same time

// lecture 2 - data types
// primitive - string, number, boolean, undefined, null
// reference - object array
// types are auto inferred based on value stored to variable
let name='';  // string
let age=22; // number
console.log("7"+"4",7+4) // '74' 11
let isValid=true; // boolean
console.log(age>20); // true

// lecture 3 - operators
// unary, binary, ternary
console.log(5+3, 5-3, 5*3, 5/3, 5**3, 5%3) // 8 2 15 1.6666666666666667 125 2
console.log(5+3*3-2**3/2) // 10
console.log(5>=3, 5<3, 5==3,5==5, 5>>3, 5<<3) // true false false true 0 40
console.log(5===5, 5==="5") // === also checks type of variable
console.log(""==0) // true

// lecture 4- conditional statements
if(age>20){
  console.log("age is more than 20");
}else if(age<20){
  console.log("age is less than 20");
}else{
  console.log("age is 20");
}
// 0, "", undefined, null - all these are falsy

// lecture 5 - loops
console.log("For Loop");
for(let i=1;i<10;i+=2){
  console.log(i,i**2);
}
console.log("While Loop");
i=1;
while(i<=10){
  console.log(2, 2*i);
  i++;
}
// for loop - best when we know how many times loop will repeat
//  while - best when we don't know repetition times

// lecture 6 - function
// 1. using function declaration
function greet(){
  console.log("Hi! what u wanna learn today?")
}
greet();
// 2. using function expression
const greet2=function(){
  console.log("Hi! what u wanna learn today? function expression")
}
greet2();

// 3. using Arrow operator
const greet3=()=>{
  console.log("Hi! what u wanna learn today? Arrow operator")
}
greet3();


// lecture 7. DOM [Doucment Object Model]
// whole html is document
// document.body(); // return all body tag
// 1. select html elements
// 2. update text and html
// 3. change styles with js
// 4. edit element attributes
// 5. event driven programming



// ====================================
// Some advanced concepts
// ====================================
// 1. THIS KEYWORD

// "this" refers to the object that is calling the function
const person = {
  name: "Arpit",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // "this" points to person -> Hello, my name is Arpit

const greetFn = person.greet;
greetFn(); // Here "this" is undefined (or global object in non-strict mode)

// Fix with bind
const boundGreet = person.greet.bind(person);
boundGreet(); // Correctly binds "this" to person


// 2. HOISTING
// Variables declared with var are hoisted (moved to top) but initialized as undefined
console.log(hoistedVar); // undefined, not error
var hoistedVar = 10;

// let and const are hoisted too but in "temporal dead zone"
try {
  console.log(hoistedLet); // ReferenceError
} catch (e) {
  console.log("Error with let:", e.message);
}
let hoistedLet = 20;

// Functions are hoisted fully
sayHello(); // works, function definition is hoisted
function sayHello() {
  console.log("Hello from a hoisted function!");
}


// 3. CLOSURES
// A closure = function that remembers variables from outer scope
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log("Outer:", outerVar, "| Inner:", innerVar);
  };
}

const newFunc = outerFunction("outside");
newFunc("inside"); // Remembers outerVar even after outerFunction finished


// 4. PROTOTYPE BASED INHERITANCE
// Constructor function
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

// Inherit
function Dog(name, breed) {
  Animal.call(this, name); // call parent constructor
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

// Override method
Dog.prototype.speak = function () {
  console.log(this.name + " barks! Breed: " + this.breed);
};

const dog1 = new Dog("Tommy", "Labrador");
console.log(dog1);
dog1.speak(); // Tommy barks! Breed: Labrador























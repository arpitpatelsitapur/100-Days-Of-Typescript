// ================================
// 1. Intersection of Types
// At runtime, intersections don’t merge values; they are compile-time constructs.
// The common type is assigned.
type A = string | number;
type B = boolean | number;

// C must satisfy both A and B → number
type C = A & B;

let c: C = 123;       // valid
// let d: C = "456";  // Error: string is not assignable to C

// ================================
// 2. Union of Types
// Can hold any value from the combined types
type D = A | B; // string | number | boolean

let e: D = "hello"; // string
e = 456;            // number
e = true;           // boolean

// ================================
// 3. Intersection of Object Types
// Ensures the object has all properties from all combined types
type Person = {
    name: string;
    age: number;
}

type Contact = {
    email: string;
    phone: string;
}

type Employee = Person & Contact;

const john: Employee = {
    name: "Arpit",
    age: 22,
    email: "arpit@example.com",
    phone: "123-456-7890"
};

console.log("Employee:", john);
// let jane: Employee = { name: "Jane", age: 30 }; // Error: missing properties

// ================================
// 4. Union of Object Types
// Can hold objects of one type or another
type Animal = {
    species: string;
}

type Dog = Animal & { breed: string };
type Cat = Animal & { color: string };

type Pet = Dog | Cat;

let myPet: Pet = { species: "Dog", breed: "Labrador" }; // Dog
myPet = { species: "Cat", color: "Black" };              // Cat
// myPet = { species: "Bird" }; // Error: missing required properties

// ================================
// 5. Intersection of Function Types
// The function must satisfy all function type signatures
type FuncA = (x: number) => string;
type FuncB = (y: string) => number;

type FuncC = FuncA & FuncB;

// Implementation requires satisfying both signatures
const func: FuncC = ((arg: any) => {
    if (typeof arg === "number") return arg.toString();
    if (typeof arg === "string") return arg.length;
    throw new Error("Invalid argument");
}) as FuncC;

// ================================
// 6. Intersection of Interfaces
// Provides multiple inheritance-like behavior
interface I1 {
    id: number;
    name: string;
}

interface I2 {
    email: string;
    phone: string;
}

type I3 = I1 & I2;

const user: I3 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    phone: "123-456-7890"
};

console.log("User:", user);
// let invalidUser: I3 = { id: 2, name: "Bob" }; // Error: missing properties

// ================================
// 7. Intersection of Object Values (Runtime)
// Intersection types only exist at compile-time, but we can type merged objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

type ObjIntersection = typeof obj1 & typeof obj2;
// ObjIntersection = { a: number; b: number; c: number }

const merged: ObjIntersection = { a: 1, b: 3, c: 4 };
console.log("Merged Object:", merged);

// ================================
// Type guards
// using typeof
function printValue(value: string | number) {
    if (typeof value === "string") {
        // Here, TypeScript knows value is a string
        console.log("String length:", value.length);
    } else {
        // Here, TypeScript knows value is a number
        console.log("Number doubled:", value * 2);
    }
}

// using instanceof
class Dog1 { bark() { console.log("Woof!"); } }
class Cat1 { meow() { console.log("Meow!"); } }

function speak(pet: Dog1 | Cat1) {
    if (pet instanceof Dog1) {
        pet.bark(); // TypeScript knows this is Dog1
    } else {
        pet.meow(); // TypeScript knows this is Cat1
    }
}

// using in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // TypeScript knows this is Fish
    } else {
        animal.fly();  // TypeScript knows this is Bird
    }
}

// Test the functions
printValue("Hello");
printValue(42);

const myDog = new Dog1();
const myCat = new Cat1();
speak(myDog);
speak(myCat);

const myFish: Fish = { swim: () => console.log("Swimming") };
const myBird: Bird = { fly: () => console.log("Flying") };
move(myFish);
move(myBird);

// ================================
// discriminated unions
// A discriminated union is a union of object types that all share:
// 1.	A common property (the “discriminator”)
// 2.	Each type has a literal type value for that property
type Circle = {
    type: "circle";
    radius: number;
}
type Rectangle = {
    type: "rectangle";
    width: number;
    height: number;
}
type Shape = Circle | Rectangle;
// here `type` is the discriminator
function area(shape: Shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2; // TypeScript knows shape is Circle
        case "rectangle":
            return shape.width * shape.height;   // TypeScript knows shape is Rectangle
    }
}
console.log("Area of Circle:", area({ type: "circle", radius: 10 }));
console.log("Area of Rectangle:", area({ type: "rectangle", width: 4, height: 6 }));

// ================================
// index properties / index signatures
// we don’t know all the property names in advance, but we know the type
type StringMap = {
    [key: string]: string;
};
const obj11: StringMap = {
    name: "Arpit",
    city: "Sitapur",
    country: "India"
};

type NumberMap = {
    [key: number]: string;
};
const nums: NumberMap = {
    1: "one",
    2: "two"
};

// mixed fixed and dynamic properties
type Flexible = {
    id: number;          // fixed property
    [key: string]: string | number; // dynamic properties
};
const obj22: Flexible = {
    id: 1,
    name: "Arpit",
    age: 22
};

// usecases
// dynamic dictionaries
const scores: { [player: string]: number } = {};
scores["Alice"] = 100;
scores["Bob"] = 200;
console.log("Scores:", scores);

// JSON-like objects with unknown keys
type JsonObject = {
    [key: string]: string | number | boolean;
};

// configuration objects
type Config = {
    [option: string]: boolean;
};
const featureFlags: Config = {
    darkMode: true,
    betaFeature: false
};
console.log("Feature Flags:", featureFlags);

// ================================
// typecasting css elements
// let name=document.querySelector("#name")! as HTMLInputElement;
// let name=<HTMLInputElement>document.querySelector("#name")!
// name.value="Hello Arpit";

let name=document.querySelector("#name");
if(name){
    (name as HTMLInputElement).value="Hello Arpit";
    (name as HTMLInputElement).style.color="red";
    (name as HTMLInputElement).style.backgroundColor="yellow";
}


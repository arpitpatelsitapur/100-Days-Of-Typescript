// object type in TypeScript

let person: {
    name: string, 
    age: number
};
person = {
    name: "Alice", 
    age: 25
};
console.log("person : ",person);
console.log("person : " + person);
//  The + operator forces person (an object) to be converted to a string.
// Default object-to-string conversion gives: [object Object]
console.log("person.name = "+person.name);
console.log("person.age = "+person.age);
console.log("person: "+JSON.stringify(person)+" | type = "+ typeof person);

// person = {name: "Bob", age: "thirty"}; // Error: Type 'string' is not assignable to type 'number'
// person = {name: "Charlie"}; // Error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'

person.age = 26; // valid
console.log("Updated person: "+JSON.stringify(person)+" | type = "+ typeof person);

// nested objects
let person2: {
    name: string, 
    age: number,
    address: {
        street: string,
        city: string,
        geo: {
            lat: number,
            lng: number
        }
    }
};
person2 = {
    name: "David",
    age: 28,
    address: {
        street: "123 Main St",
        city: "Metropolis",
        geo: {
            lat: 12.34,
            lng: 56.78
        }
    }
};

console.log("person2",person2);
console.log("person2: "+JSON.stringify(person2)+" | type = "+ typeof person2);
console.log("person2.address.city = "+person2.address.city);
console.log("person2.address.geo.lat = "+person2.address.geo.lat);

// using 'object' keyword
// allows assignment of any object
let obj1: object;
obj1 = {x: 10, y: 20};
console.log("obj1: "+JSON.stringify(obj1)+" | type = "+ typeof obj1);
obj1 = [1, 2, 3];
console.log("obj1: "+JSON.stringify(obj1)+" | type = "+ typeof obj1);
obj1 = function() { return "hello"; };
console.log("obj1: "+obj1+" | type = "+ typeof obj1);

let obj2:{}={
    a:1, b:2
};
console.log("obj2: "+JSON.stringify(obj2)+" | type = "+ typeof obj2);
obj2={a:10, b:20, c:30};
console.log("obj2: "+JSON.stringify(obj2)+" | type = "+ typeof obj2);
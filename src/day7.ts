// arrays and tuples
// arrays are same as javascript
// tuples are fixed length arrays with specified types for each element

let numArray: number[] = [1, 2, 3];
console.log("numArray: ", numArray, " | type = ", typeof numArray);
numArray[0] = 10; // allowed
// numArray[1]="20"; // Error: Type 'string' is not assignable to type 'number'
let strArray: string[] = ["a", "b", "c"];
console.log("strArray: ", strArray, " | type = ", typeof strArray);

let boolArray: boolean[] = [true, false, true];
console.log("boolArray: ", boolArray, " | type = ", typeof boolArray);

let mixedArray: (number | string | boolean)[] = [1, "a", true, 2, "b", false];
console.log("mixedArray: ", mixedArray, " | type = ", typeof mixedArray);

numArray.push(4);
console.log("numArray after push: ", numArray);

strArray.pop();
console.log("strArray after pop: ", strArray);

// unshift adds given element at the start, right shifts all elements
// shift removes element from the start, left shifts all elements
boolArray.unshift(false);
console.log("boolArray after unshift: ", boolArray);
boolArray.shift();
console.log("boolArray after shift: ", boolArray);

mixedArray.push("new element");
mixedArray.push(5);
mixedArray.push(false);
console.log("mixedArray after pushes: ", mixedArray);
mixedArray.shift();
console.log("mixedArray after shift: ", mixedArray);
mixedArray.unshift("start element");
console.log("mixedArray after unshift: ", mixedArray);

// tuple
let person: [string, number]; // fixed length array with 2 elements: string and number
person = ["Alice", 25];
console.log("person: ", person, " | type = ", typeof person);
console.log("person[0] = ", person[0]);
console.log("person[1] = ", person[1]);
console.log("person as string: ", person); // default conversion to string
// person = [30, "Bob"]; // Error: Type 'number' is not assignable to type 'string' at index 0
// person = ["Charlie"]; // Error: Source has 1 element(s) but target requires 2

person.push("extra"); // Exception, allowed, but not recommended
console.log("person after push: ", person);
// console.log("person[2] = ", person[2]); // Error - accessing out of bound index

// destructuring tuple
let [firstname, age] = person;
console.log("name: ", firstname);
console.log("age: ", age);
// let [ageOnly]: [number] = person; // Error: Type '[string, number]' is not assignable to type '[number]'. Source has 2 element(s) but target allows only 1.
let [nameOnly]: [string, number] = person; // allowed, rest elements are ignored
console.log("nameOnly: ", nameOnly);

// nested array
let coordinates: [number, number][] = [
  [10, 20],
  [30, 40],
  [50, 60],
];
console.log("coordinates: ", coordinates);
console.log("coordinates[0] = ", coordinates[0]);
console.log("coordinates[0][0] = ", coordinates[0]![0]);
console.log("coordinates[0][1] = ", coordinates[0]![1]);
coordinates.push([70, 80]);
console.log("coordinates after push: ", coordinates);
// coordinates.push([90, "100"]); // Error: Type 'string' is not assignable to type 'number'.

// nested tuple
let employee: [number, string, [string, string]]; // id, name, [designation, department]
employee = [1, "John", ["Manager", "Sales"]];
console.log("employee: ", employee);
console.log("employee[0] = ", employee[0]);
console.log("employee[1] = ", employee[1]);
console.log("employee[2] = ", employee[2]);
console.log("employee[2][0] = ", employee[2][0]);
console.log("employee[2][1] = ", employee[2][1]);

let [empId, empName, [empDesignation, empDepartment]] = employee;
console.log("empId: ", empId);
console.log("empName: ", empName);
console.log("empDesignation: ", empDesignation);
console.log("empDepartment: ", empDepartment);

// tuple with optional elements
let car: [string, string, number?]; // make, model, year (optional)
car = ["Toyota", "Camry"];
console.log("car without year: ", car);
car = ["Honda", "Civic", 2020];
console.log("car with year: ", car);

// tuple with rest elements
let rgb: [number, number, ...number[]]; // at least 2 numbers, rest can be any number of numbers
rgb = [255, 0];
console.log("rgb with 2 elements: ", rgb);
rgb = [255, 0, 0];
console.log("rgb with 3 elements: ", rgb);
rgb = [255, 0, 0, 255];
console.log("rgb with 4 elements: ", rgb);
rgb = [255, 0, 0, 255, 128];
console.log("rgb with 5 elements: ", rgb);
// rgb = [255]; // Error: Source has 1 element(s) but target requires at least 2.

// readonly tuple
let point: readonly [number, number] = [10, 20];
// point[0] = 30; // Error: Cannot assign to '0' because it is a read-only property.
console.log("readonly tuple :- point = ", point);
// point.push(30); // Error: Property 'push' does not exist on type 'readonly [number, number]'.
// point.pop(); // Error: Property 'pop' does not exist on type 'readonly [number, number]'.

// readonly array
let readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// readonlyArray.pop(); // Error: Property 'pop' does not exist on type 'readonly number[]'.
console.log("readonlyArray: ", readonlyArray);

// converting array to readonly array
let normalArray: number[] = [4, 5, 6];
let convertedReadonlyArray: readonly number[] = normalArray;
console.log("convertedReadonlyArray: ", convertedReadonlyArray);
normalArray.push(7);
console.log("normalArray after push: ", normalArray);
console.log("convertedReadonlyArray after normalArray push: ", convertedReadonlyArray); // reflects change in original array
// Note: convertedReadonlyArray is just a reference to normalArray

// converting readonly array to normal array
let anotherNormalArray: number[] = [...readonlyArray]; // using spread operator
console.log("anotherNormalArray: ", anotherNormalArray);
anotherNormalArray.push(4);
console.log("anotherNormalArray after push: ", anotherNormalArray);
console.log("readonlyArray after anotherNormalArray push: ", readonlyArray); // does not reflect change in readonly array


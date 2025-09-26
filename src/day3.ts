// Variables in TypeScript
// const requires initialization during declaration and cannot be reassigned
// let can be declared without initialization and can be reassigned later
const num: number = 10;
let message: string = "Hello, World!";
let val; // Implicitly of type any
val = 100;

console.log("num : ", num);
console.log("message : ", message);
console.log("val : ", val);

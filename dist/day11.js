// ES6 features
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
// 1. let and const
let a = 10;
const b = 20;
console.log(a, b); // 10 20
// 2. arrow function
const greet = () => {
    console.log("Hello");
};
greet(); // Hello
// 3. template literals
const username = "Arpit";
const greeting = `Hello ${username}`;
console.log(greeting); // Hello Arpit
// 4. destructuring
const person = ["Arpit", "Patel", 20];
const [fname, lastName, p_age] = person;
console.log(fname, lastName, p_age); // Arpit Patel 20
let [fname2, lastName2] = person; // rest elements are ignored
console.log(fname2, lastName2); // Arpit Patel
let [fname3, p_age3] = person;
console.log(fname3, p_age3); // Arpit 20
// object destructuring
const user = { name: "Arpit", age: 20, city: "Delhi" };
let { name } = user;
console.log(name); // Arpit
let { name: username2 } = user; // rename variable
console.log(username2); // Arpit 
// customer will be destructured
function display({ id, name }) {
    console.log(`ID: ${id}, Name: ${name}`);
}
display({ id: 77, name: "Bengoshi" });
// 5. spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1,2,3,4,5,6]
function add(x, y, z) {
    return x + y + z;
}
console.log("add(...[1,2,3] =", add(...[1, 2, 3])); // 6
// 6. rest operator
let [n1, n2, ...rest] = [1, 2, 3, 4, 5, 6];
console.log("n1,n2,rest :", n1, n2, rest); // 1 2 [3,4,5,6]
const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
//rest vs spread
// rest collects while spread spreads
// rest in left side of assignment while spread in right side of assignment
// 7. default parameters
const greet2 = (name = "Guest") => {
    console.log(`Hello ${name}`);
};
greet2();
greet2("Arpit");
// 8. arrow function
const greet3 = (name) => {
    console.log(`Hello ${name}`);
};
greet3("Arpit");
// 9. nullish coalescing operator
let value;
console.log(value !== null && value !== void 0 ? value : "Default Value"); // Default Value
value = "Hello";
console.log(value !== null && value !== void 0 ? value : "Default Value"); // Hello
value = "";
console.log(value !== null && value !== void 0 ? value : "Default Value"); // "" empty string
value = 10;
console.log(value !== null && value !== void 0 ? value : "Default Value"); // 10
let user1 = { name: "sensei" };
console.log(user1);
console.log((_a = user1.address) === null || _a === void 0 ? void 0 : _a.city); // undefined
// using with nullish coalescing
console.log((_c = (_b = user1.address) === null || _b === void 0 ? void 0 : _b.city) !== null && _c !== void 0 ? _c : "Delhi"); // Delhi
// optional chaining in array
let users = [{ name: "Arpit" }, { name: "Patel", address: { city: "Kanpur" } }];
console.log(users);
console.log((_f = (_e = (_d = users[1]) === null || _d === void 0 ? void 0 : _d.address) === null || _e === void 0 ? void 0 : _e.city) !== null && _f !== void 0 ? _f : "No city");
let admin1 = { name: "Ram" };
console.log(admin1);
console.log((_g = admin1.getRole) === null || _g === void 0 ? void 0 : _g.call(admin1)); // undefined
console.log((_j = (_h = admin1.getRole) === null || _h === void 0 ? void 0 : _h.call(admin1)) !== null && _j !== void 0 ? _j : "No role"); // No role
export {};
//# sourceMappingURL=day11.js.map
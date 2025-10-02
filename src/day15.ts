// function overloading
// multiple function signatures for a single function implementation
// useful for different ways to call a function with different argument types
// and return types
function add(a: number, b: number): number;
function add(a: string, b: string): string;
// function add(a: number, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("Arpit, ", "Patel!")); // "Arpit, Patel!"
// console.log(add(1, "2")); // Error: No overload matches this call


// function overload with optional parameters
// position of optional parameter must be after required parameters
function concatenate(a: string, b: string, separator?: string): string;
function concatenate(a: string, b: string, separator: string = " "): string {
  return a + separator + b;
}

console.log(concatenate("Arpit", "Patel")); // "Arpit Patel"
console.log(concatenate("Arpit", "Patel", ", ")); // "Arpit, Patel"
// console.log(concatenate("Arpit", "Patel", 123)); // Error: Argument of type 'number' is not assignable to parameter of type 'string | undefined'.


// promise
// represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value
function fetchData(str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str === "fetch") {
                resolve("Fetched data.");
            } else {
                reject("Invalid str");
            }
        },100);
    });
}

fetchData("fetch")
    .then(data => console.log(data)) // "Fetched data."
    .catch(error => console.error(error));

// promises are chainable
// each then returns a new promise
// promises are resolved in order
// useful for sequential async operations
// also in javascript


// Generics 
// reusable components that work with any data type
// builtin- Array, Promise, Map, Set, etc
// user-defined - function, class, interface, type alias
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<number>(42)); // 42
console.log(identity<string>("Arpit")); // "Arpit"
console.log(identity<boolean>(true)); // true
console.log(identity<Array<number>>([1, 2, 3])); // [1, 2, 3]
console.log(identity<{name: string}>({name: "Arpit"})); // {name: "Arpit"}

// generic with multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2, "merged": true};
}
const mergedObj = merge({name: "Arpit"}, {age: 30});
console.log(mergedObj); // {name: "Arpit", age: 30, merged: true}
console.log(merge({a:1, b:2}, {c:3, d:4})); // {a:1, b:2, c:3, d:4, merged: true}


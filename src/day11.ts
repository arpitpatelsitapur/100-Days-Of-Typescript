// ES6 features

// 1. let and const
let a=10;
const b=20;
console.log(a,b); // 10 20

// 2. arrow function
const greet=()=>{
    console.log("Hello");
}
greet(); // Hello

// 3. template literals
const username="Arpit";
const greeting=`Hello ${username}`;
console.log(greeting); // Hello Arpit

// 4. destructuring
const person=["Arpit","Patel",20];
const [fname,lastName,p_age]=person;
console.log(fname,lastName,p_age); // Arpit Patel 20
let [fname2,lastName2]=person; // rest elements are ignored
console.log(fname2,lastName2); // Arpit Patel
let [fname3,p_age3]=person;
console.log(fname3,p_age3); // Arpit 20
// object destructuring
const user={name:"Arpit",age:20, city:"Delhi"};
let {name}=user;
console.log(name); // Arpit
let {name:username2}=user; // rename variable
console.log(username2); // Arpit 
// parameter destructuring
type customer={id:number,name:string};
// customer will be destructured
function display({ id, name }: customer): void {
    console.log(`ID: ${id}, Name: ${name}`);
}
display({id:77,name:"Bengoshi"});

// 5. spread operator
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3); // [1,2,3,4,5,6]
function add(x:number,y:number,z:number):number{
    return x+y+z;
}
console.log("add(...[1,2,3] =",add(...[1,2,3])); // 6

// 6. rest operator
let [n1,n2,...rest]=[1,2,3,4,5,6];
console.log("n1,n2,rest :",n1,n2,rest); // 1 2 [3,4,5,6]
const sum=(...args:number[])=>{
    return args.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4,5)); // 15

//rest vs spread
// rest collects while spread spreads
// rest in left side of assignment while spread in right side of assignment

// 7. default parameters
const greet2=(name:string="Guest")=>{
    console.log(`Hello ${name}`);
}
greet2();
greet2("Arpit");

// 8. arrow function
const greet3=(name:string)=>{
    console.log(`Hello ${name}`);
}
greet3("Arpit");

// 9. nullish coalescing operator
let value;
console.log(value ?? "Default Value"); // Default Value
value="Hello";
console.log(value ?? "Default Value"); // Hello
value="";
console.log(value ?? "Default Value"); // "" empty string
value=10;
console.log(value ?? "Default Value"); // 10


// 10. optional chaining
// safely access deeply nested properties
// without optional chaining we will need multiple checks
type User={
    name:string,
    address?:{
        city?:string;
        zip?:number;
    };
};
let user1:User={name:"sensei"};
console.log(user1);
console.log(user1.address?.city); // undefined
// using with nullish coalescing
console.log(user1.address?.city ?? "Delhi"); // Delhi
// optional chaining in array
let users:User[]=[{name:"Arpit"},{name:"Patel",address:{city:"Kanpur"}}];
console.log(users)
console.log(users[1]?.address?.city ?? "No city");
// optional chaining in function
type Admin={
    name:string;
    getRole?:()=>string;
};
let admin1:Admin={name:"Ram"};
console.log(admin1);
console.log(admin1.getRole?.()); // undefined
console.log(admin1.getRole?.() ?? "No role"); // No role



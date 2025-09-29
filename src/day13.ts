// interfaces
// like class but properties can't be assigned any value
interface User{
    fname:string;
    age:number;
    isAdmin:true;
    display:()=>void;
}

let user:User={
    fname:"John",
    age:30,
    isAdmin:true,
    display:()=>{
        console.log(`User Name : ${user.fname}, Age : ${user.age}, isAdmin : ${user.isAdmin}`);
    }
}

console.log(user);
user.display();

// interface vs types
// interface can be extended, type can't be 
// interface can be merged, type can't be 
// interface can be implemented in class, type can't be

// interface extending another interface
interface Person{
    lname:string;
    email:string;
}

interface Employee extends Person{
    empId:number;
    salary:number;
}

let emp1:Employee={
    empId:101,
    salary:50000,
    lname:"Usagi",
    email:"usagi@example.com"
}   
console.log(emp1);

// mergeing implements
interface Users { id: number; }
interface Users { name: string; }  // merged with previous
let u: Users = { id: 1, name: "Arpit" };
console.log(u);

// interface vs abstract class
// A class can only extend one abstract class, But a class can implement multiple interfaces
// Interfaces exist only at compile-time. They do not generate any JavaScript code
// Interfaces can be extended by other interfaces, even multiple ones, this avoids the diamond problem of multiple class inheritance.
// TypeScript uses structural typing
// Abstract classes can have implementation details for some members, interface have none
// interfaces don’t force inheritance — just structure.
// we can reopen interfaces and add new properties later.

// when a class implements an interface, the class must provide all properties and methods declared in the interface (except optional ones ?)

class Manager implements User{
    constructor(
        public fname:string,
        public age:number,
        public isAdmin:true
    ){}
    display(){
        console.log(`Manager Name : ${this.fname}, Age : ${this.age}, isAdmin : ${this.isAdmin}`);
    }

}
class Developer implements User{
    constructor(
        public fname:string,
        public age:number,
        public isAdmin:true
    ){}
    display(){
        console.log(`Developer Name : ${this.fname}, Age : ${this.age}, isAdmin : ${this.isAdmin}`);
    }

}

let m1=new Manager("Alice",35,true);
let d1=new Developer("Bob",28,true);
function printUser(user:User){
    user.display();
}
printUser(m1);
printUser(d1);

// no diamond problem in interfaces
interface A { do(): void; }
// multiple interfaces supported (like multiple inheritance)
interface B extends A {}
interface C extends A {}
class D implements B, C {
  do() { console.log("D does something"); }
}
let d=new D();
d.do();

// readonly properties
interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point={x:10,y:20};
// p1.x=30; // error
console.log(p1);

// optional properties
interface Car{
    make:string;
    model:string;
    year?:number; // optional property
}
let car1:Car={make:"Toyota",model:"Camry",year:2020};
let car2:Car={make:"Honda",model:"Civic"}; // year is optional
console.log(car1);
console.log(car2);

// indexable types
interface StringArray{
    [index:number]:string;
}
let myArray:StringArray;
myArray=["Alice","Bob","Charlie"];
console.log(myArray[0]); // Alice


// interface for function type
// ex. Any function that takes two numbers (a and b) and returns a number can be considered of type AddFn
// equivalent to `type AddFn = (a: number, b: number) => number;`
interface AddFn{
    (a:number,b:number):number;
}
let add:AddFn;
add=(x,y)=>x+y;
// add=(x,y,z)=>x+y+z; // error
// add=(x,y)=>x.toString()+y.toString(); // error
console.log(add(5,10));







// classes
class User {
    // properties
    name: string;
    email: string
    age: number;
    // access modifiers
    private income: number = 50000; // private property
    protected city: string = "Delhi"; // protected property
    readonly country: string = "INDIA"; // readonly property
    // methods
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}\nI am ${this.age} years old\nMy email is ${this.email}\nI live in ${this.city}, ${this.country}\nmy income is ${this.getIncome()}`);
    }
    private getIncome() { // private method
        return this.income;
    }
}

let user1 = new User("user1", "user1@example.com", 25);
let user2 = new User("user2", "user2@example.com", 30);
console.log(user1);
console.log(user1.name, user1.email, user1.age);
user1.greet();
user2.greet();
user1.name = "newUser1"; // allowed
// user1.income=60000; // not allowed
// user1.city="Mumbai"; // not allowed
// user1.country="USA"; // not allowed
console.log(user1);
// user1.displayIncome(); // not allowed

// shorthand syntax for properties and constructor
class Car{
    // normal
    country:string;

    // shorthand initialization
    constructor(public brand:string, public model:string, public year:number, private buyerName:string ,country:string){
        // no need to assign parameters to shorthand
        this.country=country;
    }
}
const car1=new Car("Tesla","ES2025", 2025, "Johny Cage","US");
console.log(car1);

// inheritance
class Employee extends User{
    // additional property
    position:string;

    constructor(name:string, email:string, age:number, position:string){
        super(name,email,age); // calling parent constructor
        this.position=position;
    }

    // overriding method
    greet(){
        console.log(`Hello, my name is ${this.name}\nI am ${this.age} years old\nMy email is ${this.email}\nI work as a ${this.position}\nI live in ${this.city}, ${this.country}`);
    }

    // new method
    displayCity(){
        console.log(`I live in ${this.city}`);
    }
}

const emp1=new Employee("emp1","emp1@example.com", 28,"Software Engineer");
console.log(emp1);
emp1.greet();
emp1.displayCity();
// emp1.getIncome(); // not allowed
// emp1.income; // not allowed
// emp1.city; // not allowed
// emp1.country="USA"; // not allowed

// getters and setters
class BankAccount{
    private _balance:number=0;

    get balance():number{
        return this._balance;
    }

    set balance(amount:number){
        if(amount<0){
            console.log("Balance cannot be negative");
        }else{
            this._balance=amount;
        }
    }
}

const myAccount=new BankAccount();
console.log(myAccount.balance); // 0
myAccount.balance=1000; // setting balance using setter
console.log(myAccount.balance); // 1000
myAccount.balance=-500; // trying to set negative balance
console.log(myAccount.balance); // 1000

// static properties and methods
class MathUtils{
    static PI:number=3.14159;

    static calculateCircumference(radius:number):number{
        return 2*MathUtils.PI*radius;
    }
}

console.log(MathUtils.PI); // accessing static property
console.log(MathUtils.calculateCircumference(10)); // accessing static method

// abstract classes
abstract class Shape{
    abstract area():number; // abstract method, will be defined differently in each derived class

    displayArea(){
        console.log(`Area: ${this.area()}`);
    }
}

class Circle extends Shape{
    constructor(public radius:number){
        super();
    }

    area():number{
        return MathUtils.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(public width:number, public height:number){
        super();
    }

    area():number{
        return this.width*this.height;
    }
}

const circle=new Circle(10);
circle.displayArea(); // Area: 314.159

const rectangle=new Rectangle(10,20);
rectangle.displayArea(); // Area: 200

// private constructors and singleton pattern
// singleton instance must be with private constructor
// useful when exactly one object is needed to coordinate actions across the system
// example: database connection, logging, configuration settings etc.
class Database{
    private static instance:Database;
    
    private constructor(){
        // private constructor to prevent direct instantiation
    }
    static getInstance():Database{
        if(!Database.instance){
            console.log("Creating new instance");
            Database.instance=new Database();
        }
        return Database.instance;
    }

    connect(){
        console.log("Connected to database");
    }
}
// const db1=new Database(); // not allowed
const db1=Database.getInstance();
db1.connect();
// const db2=new Database(); // not allowed
const db2=Database.getInstance();
console.log(db1===db2); // true, both are same instance




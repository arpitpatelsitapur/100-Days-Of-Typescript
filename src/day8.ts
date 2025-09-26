// enums, any type, union type, literal type, type alias, 
// function return type, function as type, function type for callback,
// unknown type, never type

// enum - not in javascript
console.log("Testing Enums");
enum Role { ADMIN, READ_ONLY, AUTHOR };
const user={
    name:"Max",
    role:Role.ADMIN
}
if(user.role===Role.ADMIN){
    console.log(user.name+" is admin.");
}
// explicit value assignment to enum
enum TicketStatus { CLOSED=400,OPEN=402, PENDING };
const ticket={
    id:1,
    status:TicketStatus.PENDING
}
if(ticket.status===TicketStatus.PENDING){
    console.log("Ticket is still pending.");
}
console.log("------------------------");

// any type - avoid using it
console.log("Testing any type");
let myVariable:any;
myVariable=10;
console.log("myVariable: "+myVariable+" (type: "+typeof myVariable+")");
myVariable="Max";
console.log("myVariable: "+myVariable+" (type: "+typeof myVariable+")");
myVariable=true;
console.log("myVariable: "+myVariable+" (type: "+typeof myVariable+")");
myVariable={name:"Max"};
console.log("myVariable: "+myVariable+" (type: "+typeof myVariable+")");
console.log("------------------------");

// union type
console.log("Testing union type");
let unionType:string|number;
unionType="Max";
console.log("unionType: "+unionType+" (type: "+typeof unionType+")");   
unionType=10;
console.log("unionType: "+unionType+" (type: "+typeof unionType+")");
// unionType=true; // error
console.log("------------------------");

// literal type are values you assign to a variable
console.log("Testing literal type");
let literalType:"admin"|"user"|"author";
literalType="admin";
console.log("literalType: "+literalType);
literalType="user";
console.log("literalType: "+literalType);
// literalType="superadmin"; // error
console.log("------------------------");

// type alias- custom type names
console.log("Testing type alias");
type Combinable=string|number;
let typeAlias:Combinable;
typeAlias="Max";
typeAlias=10;
console.log("typeAlias: "+typeAlias);
type UserData={name:string,age:number};
let userData:UserData;
userData={name:"Max",age:30};
console.log("userData: "+userData.name+", "+userData.age);
console.log("------------------------");

// function return type - auto-inferred till not specified
console.log("Testing function return type");
function add(a:number,b:number){
    return a+b;
}
function addAsStr(a:number,b:number):string{
    return a.toString()+b.toString();
}
console.log("add(2,3): "+add(2,3)+" (type: "+typeof add(2,3)+")");
console.log("addAsStr(2,3): "+addAsStr(2,3)+" (type: "+typeof addAsStr(2,3)+")");
console.log("------------------------");

// function as type
console.log("Testing function as type");
let greet:Function;
greet=function(name:string){
    console.log("Hello, "+name);
}
greet("Max");
// greet=10; // error
// arrow function syntax "fn_name=(parameters)=>{function body}
greet=(name:string)=>{
    console.log("Hi, "+name);
}
greet("Anna");
// more specific function type
let combineValues:(a:number,b:number)=>number;
combineValues=add;
// combineValues=function(a:string,b:string):string{ // error
//     return a+b;
// }
console.log(combineValues(5,10));
console.log("------------------------");

// function type for callback
// in-line function type
// it's just a type declaration, not function call, but we need to define it before use
console.log("Testing Function for callback(as parameter)");
function display(msg:string,result:number){
    console.log(msg+" "+result);
}
function getResult(n1:number,n2:number,func:(msg:string,result:number)=>void){
    const res=n1+n2;
    func("Result is:",res);
}
getResult(5,10,display);
// getResult(7,8,100); // error
console.log("------------------------");

// unknown type - safer than any type
console.log("Testing unknown type");
let userInput:unknown;
let userName:string="Hello";
userInput=5;
userInput="Max";
// userName=userInput; // error- unknown can't be assigned to other types directly
// need to do type checking before assignment
if(typeof userInput==="string"){
    userName=userInput;
}
console.log("userName: "+userName);
console.log("typeof userInput: "+typeof userInput);
console.log("------------------------");
// never type
console.log("Testing never type");
// function which never returns anything
// function which always throws an error
// function which has infinite loop
function generateError(message:string,code:number):never{
    throw {message:message,errorCode:code};
}
// generateError("An error occurred!",500); // this will stop the program
// so we use try-catch block
try{
    generateError("An error occurred!",500);
}catch(error){
    console.log(error);
}   


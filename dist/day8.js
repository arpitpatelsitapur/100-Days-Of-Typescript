// enums, any type, union type, literal type, type alias, 
// function return type, function as type, function type for callback,
// unknown type, never type
// enum - not in javascript
console.log("Testing Enums");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const user = {
    name: "Max",
    role: Role.ADMIN
};
if (user.role === Role.ADMIN) {
    console.log(user.name + " is admin.");
}
// explicit value assignment to enum
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["CLOSED"] = 400] = "CLOSED";
    TicketStatus[TicketStatus["OPEN"] = 402] = "OPEN";
    TicketStatus[TicketStatus["PENDING"] = 403] = "PENDING";
})(TicketStatus || (TicketStatus = {}));
;
const ticket = {
    id: 1,
    status: TicketStatus.PENDING
};
if (ticket.status === TicketStatus.PENDING) {
    console.log("Ticket is still pending.");
}
console.log("------------------------");
// any type - avoid using it
console.log("Testing any type");
let myVariable;
myVariable = 10;
console.log("myVariable: " + myVariable + " (type: " + typeof myVariable + ")");
myVariable = "Max";
console.log("myVariable: " + myVariable + " (type: " + typeof myVariable + ")");
myVariable = true;
console.log("myVariable: " + myVariable + " (type: " + typeof myVariable + ")");
myVariable = { name: "Max" };
console.log("myVariable: " + myVariable + " (type: " + typeof myVariable + ")");
console.log("------------------------");
// union type
console.log("Testing union type");
let unionType;
unionType = "Max";
console.log("unionType: " + unionType + " (type: " + typeof unionType + ")");
unionType = 10;
console.log("unionType: " + unionType + " (type: " + typeof unionType + ")");
// unionType=true; // error
console.log("------------------------");
// literal type are values you assign to a variable
console.log("Testing literal type");
let literalType;
literalType = "admin";
console.log("literalType: " + literalType);
literalType = "user";
console.log("literalType: " + literalType);
// literalType="superadmin"; // error
console.log("------------------------");
// type alias- custom type names
console.log("Testing type alias");
let typeAlias;
typeAlias = "Max";
typeAlias = 10;
console.log("typeAlias: " + typeAlias);
let userData;
userData = { name: "Max", age: 30 };
console.log("userData: " + userData.name + ", " + userData.age);
console.log("------------------------");
// function return type - auto-inferred till not specified
console.log("Testing function return type");
function add(a, b) {
    return a + b;
}
function addAsStr(a, b) {
    return a.toString() + b.toString();
}
console.log("add(2,3): " + add(2, 3) + " (type: " + typeof add(2, 3) + ")");
console.log("addAsStr(2,3): " + addAsStr(2, 3) + " (type: " + typeof addAsStr(2, 3) + ")");
console.log("------------------------");
// function as type
console.log("Testing function as type");
let greet;
greet = function (name) {
    console.log("Hello, " + name);
};
greet("Max");
// greet=10; // error
// arrow function syntax "fn_name=(parameters)=>{function body}
greet = (name) => {
    console.log("Hi, " + name);
};
greet("Anna");
// more specific function type
let combineValues;
combineValues = add;
// combineValues=function(a:string,b:string):string{ // error
//     return a+b;
// }
console.log(combineValues(5, 10));
console.log("------------------------");
// function type for callback
// in-line function type
// it's just a type declaration, not function call, but we need to define it before use
console.log("Testing Function for callback(as parameter)");
function display(msg, result) {
    console.log(msg + " " + result);
}
function getResult(n1, n2, func) {
    const res = n1 + n2;
    func("Result is:", res);
}
getResult(5, 10, display);
// getResult(7,8,100); // error
console.log("------------------------");
// unknown type - safer than any type
console.log("Testing unknown type");
let userInput;
let userName = "Hello";
userInput = 5;
userInput = "Max";
// userName=userInput; // error- unknown can't be assigned to other types directly
// need to do type checking before assignment
if (typeof userInput === "string") {
    userName = userInput;
}
console.log("userName: " + userName);
console.log("typeof userInput: " + typeof userInput);
console.log("------------------------");
// never type
console.log("Testing never type");
// function which never returns anything
// function which always throws an error
// function which has infinite loop
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// generateError("An error occurred!",500); // this will stop the program
// so we use try-catch block
try {
    generateError("An error occurred!", 500);
}
catch (error) {
    console.log(error);
}
export {};
//# sourceMappingURL=day8.js.map
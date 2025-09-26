// datatypes- string, number , boolean

let myName: string = "Arpit"; // double quotes
const title: string = 'Software Developer'; // single quotes
console.log("My name is " + myName );

let about = `My name is ${myName} 
I'm a ${title}`; // backtick
console.log(about);

// numbers in typescript are always floats
let age: number = 23; // 23.0
const pi =3.14;
console.log("My age is " + age);
console.log("Value of pi is " + pi);

// boolean
let isLoggedIn: boolean = false;
console.log("Is user logged in? " + isLoggedIn);
console.log("10<15 " + (10 < 15));
console.log("10>15 " + (10 > 15));
console.log("10==15 " + (10 as number == 15 as number));
console.log("0 "+Boolean(0));
console.log("1 "+Boolean(1));
console.log("'' "+Boolean(''));
console.log("'abc' "+Boolean('abc'));
console.log("null "+Boolean(null));
console.log("undefined "+Boolean(undefined));
console.log("NaN "+Boolean(NaN));
console.log("[] "+Boolean([]));
console.log("{} "+Boolean({}));

// boolean vs Boolean
let isAdmin: boolean = true; // primitive boolean type
let isSuperAdmin: Boolean = new Boolean(true); // wrapper object type
console.log("isAdmin: boolean "+ isAdmin+" | type = "+ typeof isAdmin);
console.log("isSuperAdmin: Boolean "+ isSuperAdmin+" | type = "+ typeof isSuperAdmin);
console.log("isAdmin == isSuperAdmin "+ (isAdmin == isSuperAdmin));
console.log("isAdmin === isSuperAdmin "+ (isAdmin === isSuperAdmin));
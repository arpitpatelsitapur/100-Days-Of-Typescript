// type assignment and type inference
// type is auto inferred during initialization
// once type is inferrred, it cannot be changed
// typeof operator checks the type of the current value, not the variable itself.
// TypeScript types only exist at compile time.

let number1=10; // type inferred as number
// number1="abc"; // Error: Type 'string' is not assignable to type 'number'
console.log("number1: "+number1+" | type = "+ typeof number1);

let str1;  // type inferred as any
str1=10;
console.log("str1: "+str1+" | type = "+ typeof str1);
str1="abc";
console.log("str1: "+str1+" | type = "+ typeof str1);
str1=true;
console.log("str1: "+str1+" | type = "+ typeof str1);

// type assertion (type casting)
let str2; 
str2=100; // type inferred as number
console.log("str2: "+str2+" | type = "+ typeof str2);
// type casting to string
let str3= <string><unknown>str2; // using angle bracket syntax
console.log("str3: "+str3+" | type = "+ typeof str3);
let str4= str2 as unknown as string; // using 'as' syntax
console.log("str4: "+str4+" | type = "+ typeof str4);

let num = 100;
// Type assertion (compile time only, no conversion):
let fakeString = num as unknown as string;
console.log(fakeString, typeof fakeString); // 100 number ❌
// Type conversion (real change at runtime):
let realString = String(num);
console.log(realString, typeof realString); // "100" string ✅

// union type
let multiType: number | string;
multiType=100;
console.log("multiType: "+multiType+" | type = "+ typeof multiType);
multiType="abc";
console.log("multiType: "+multiType+" | type = "+ typeof multiType);
// multiType=true; // Error: Type 'boolean' is not assignable to type 'string | number'

let multiType2: number | string | boolean;
multiType2=100;
console.log("multiType2: "+multiType2+" | type = "+ typeof multiType2);
multiType2="abc";
console.log("multiType2: "+multiType2+" | type = "+ typeof multiType2);
multiType2=true;
console.log("multiType2: "+multiType2+" | type = "+ typeof multiType2);

// any type
let anyType: any;
anyType=100;
console.log("anyType: "+anyType+" | type = "+ typeof anyType);
anyType="abc";
console.log("anyType: "+anyType+" | type = "+ typeof anyType);
anyType=true;
console.log("anyType: "+anyType+" | type = "+ typeof anyType);
anyType={name:"John", age:30};
console.log("anyType: "+JSON.stringify(anyType)+" | type = "+ typeof anyType);

// unknown type
let unknownType: unknown;
unknownType=100;
console.log("unknownType: "+unknownType+" | type = "+ typeof unknownType);
unknownType="abc";
console.log("unknownType: "+unknownType+" | type = "+ typeof unknownType);
unknownType=true;
console.log("unknownType: "+unknownType+" | type = "+ typeof unknownType);
unknownType={name:"John", age:30};
console.log("unknownType: "+JSON.stringify(unknownType)+" | type = "+ typeof unknownType);


// console.log(document); // document is the root element of the HTML document
// console.dir(document); // dir is used to print the properties of the document object

// console.dir(document.body); // body is the child element of the document object

document.body.innerHTML="Mizu Kudasai"; // innerHTML is used to set the HTML content of the body element

document.body.innerHTML="<h1>Mizu Kudasai</h1>";
// innerhtml is overwritten on every change

// document.body.innerHTML="<h1>Mizu Kudasai</h1><button>Click me</button>";

document.body.innerHTML=document.body.innerHTML+"<button>Click me</button>";

console.log(document.body.style);

document.body.style.backgroundColor="lightyellow";
document.body.style.color="Green";
document.body.style.fontSize="20px";
document.body.style.fontWeight="bold";
document.body.style.textAlign="center";
document.body.style.padding="20px";
document.body.style.margin="20px";
document.body.style.border="1px solid black";




console.log("merve");

document.write("merve");

let a = 5;
let b = 10;
console.log(a + b);

console.clear();
console.log("merve");

// alert("hello"); // showing a pop-up

// debugger;
// helps to find errors in the source code

// var, let, const

/* SCOPE
global: accessible from everywhere
function:, block

var name = 10; // global scope, accessible from everywhere
console.log(name);

function exampleFunction() {
    var number = 10; // accessible within curly braces
}
exampleFunction();
*/

// var: everything defined with var is function-scoped
// let, const: block-scoped

function greet() {
    var greeting = "hello to everyone";
    console.log(greeting);
    if (true) {
        var b = 10;
        let c = 10;
        // 'let' allows access only within these curly braces
        // 'const' would behave the same way
    }
    console.log(b);
}

greet();

/*
if (true) {
    // you can't declare the same variable within a block using let or const
    // but it would work if it was declared with var
    let a = 5;
    let b = 10;
}
console.log(b); // block-scoped, so it won't work outside of the curly braces
*/

/* let and const difference

let m = 5;
m = 12; // can be reassigned
console.log(m);

// const does not allow reassignment
const user = {
    username: "merve",
    password: "123"
}
// user = {}; // this would result in an error
user.username = "meltem"; // this is allowed
console.log(user);
*/

// number, string ...

console.log("hello world");

var weLove = "Kodluyoruz";
if (2 > 1) {
    var weLove = "Bootcamp";
    console.log(weLove);
}
console.log(weLove); // output: Bootcamp Bootcamp

/*
let schoolNumber = 414;
if (true) {
    let schoolNumber = 245;
    console.log("Value in the first block: " + schoolNumber); // 414
    if (true) {
        let schoolNumber = 312;
        console.log("Value in the second block: " + schoolNumber); // 312
    }
}
console.log("Value in the global scope: " + schoolNumber); // 414, after exiting the scope, it refers to the global value
*/

const userObject = {
    name: "Ahmet",
}
userObject.name = "Dila"; // allowed, can modify the inner values of a const object
console.log(userObject.name);

// alert, prompt, confirm are part of the window object

/*
let nameInput = prompt("Enter your name:");
console.log(nameInput);

let result = confirm("Delete?");
console.log(result); // true for OK, false for Cancel

let age = Number(prompt("Enter your age:"));
console.log(typeof age); // age is initially a string, using Number() to convert
*/

// IF ELSE IF AND ELSE structure with an example


let nameInput = prompt("Enter your name");
let idNumber = prompt("Enter your ID number");

function register(name, id) {
    if (name !== "") {
        if (id.length === 11) {
            console.log("Registration successful");
        } else {
            console.log("Invalid ID length");
        }
    } else {
        console.log("Name cannot be empty");
    }
}

register(nameInput, idNumber);


// TOOLTIP AND BREAKPOINT

// Tooltip: provides information before pressing Enter in VSCode
// Breakpoint: allows step-by-step execution of code, use 'debugger' statement and debug from the 'Sources' tab

// Parameterless and parameterized methods

/*
function test() {
    console.log("merve");
}
// debugger;
test();
test();

function printNameAndSurname(name, surname) {
    console.log("Name: " + name + " Surname: " + surname);
}
printNameAndSurname("meltem", "özdemir");

// forEach usage with arrays
let names = ["merve", "ece", "sude", "murat"];
names.forEach(function (name) {
    console.log(name);
});
*/

// Array methods




let car=["bmw","toyota","porsche"];
/*
push: adds an element to the end of the array
console.log(car.length)
car.push("opel"); //append the car in array
console.log(car.length);

*/

/*
append the first element
car.unshift("hundai");
console.log(car);
*/

/*
car.pop();  remove the last element
console.log(car)
*/

/*
car.shift()   remove the first element
console.log(car);

*/

/*
car.splice(2,0,"hundai")
console.log(car)  

*/

/*
console.log(car.toString()) 
normally car array object but we reverse a string

CONCAT:  car.concat(car2) connect the arrays
reverse: reverse a array 
*/


/*EXAMPLE
let product1 = {
    name: "ACER Swift",
    category: "technology",
    cost: 4.500
};

let product2 = {
    name: "ACER Nitro5",
    category: "technology",
    cost: 7.500
};

let product3 = {
    name: "ACER",
    category: "technology",
    cost: 5.100
};

let product4 = {
    name: "LENOVO",
    category: "technology",
    cost: 4.500
};

let products = [product1, product2, product3, product4];
let filterProducts = [];
let giveName = prompt("Enter a name").toUpperCase();

getFilterProduct(products);
writeFilterProduct(filterProducts);

function getFilterProduct(products) {
    products.forEach(function (product) {
        if (product.name.toUpperCase().includes(giveName, 0)) {
            filterProducts.push(product);
        }
    });
}

function writeFilterProduct(products) {
    products.forEach(function (product) {
        console.log("|" + product.name + " " + product.cost + " " + product.category);
    });
}


*/




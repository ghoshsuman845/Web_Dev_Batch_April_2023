// ===TDZ starts for let and const variables===

//whenever JS code in executed, an execution context is created

// Hoisting is JS is  the behaviour where function and variables can be used
// even before they are declared


// var: reinitialize and redeclare variables
// variables created using var keyword are present inside global memory space
console.log(a); // undefined
var a = 10;
console.log(a);

// a = 20; reinitialization
console.log(a);

console.log(add(2,3));

function add(a, b) {
    return a + b;
}


// let: reinitialize but not redeclare variables
// variables created using let keyword are present in another memory space rather than global
// let is hoisted, but in this case variable is present in
//  temporal dead zone.since the variables are in TDZ,
//  that's why they are not accessible

// Temporal Dead Zone(TDZ): is period of time during which the let and const
// declarations cannot be accessed.
// TDZ starts when code execution enters the block which contains the let and const
// declaration and continues until the declaration is executed
        
    
// console.log(b);
// ====TDZ ends====
let b = 10;
console.log(b);
b = 20;
console.log(b);

// const: cannot reinitialize as well redeclare variable
// present in another memory space rather than global
// const is hoisted, but is in TDZ.
// console.log(PI);
const PI = 3.14;
// PI = 2;
console.log(PI);

// function expression
// hoisting doesn't work
console.log(add(2,3));
var sum = (a, b) => a + b;
console.log(sum);
var add = sum;
console.log(add);
console.log(add(2, 3));
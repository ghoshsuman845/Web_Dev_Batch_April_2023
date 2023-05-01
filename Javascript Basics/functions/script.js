//  = : assignment
//  == : compares only the values
// === : compares the values as well as the datatype

var a = 10;
var b = "10";
console.log(a==b);
console.log(a === b);

// function declaration
// function function_name(param1, param2, param3, .....) {
//     // code
// }

// function_name()

// a, b are parameters
// parameters are list of variables added inside parantheses in function declaration
function add(a = 3, b = 4) { 
    return a + b;
}

// function invocation: calling the function
// arguments are values that are passed to the function when it is called
var sum = add(2, 3) // 2, 3 are arguments here 

function multiplyByTwo(sum) {
    return sum * 2;
}

console.log(multiplyByTwo(sum));

// function expression
// var variable_name = function (p1, p2, ....) {
//     // code
// }
// variable_name(arg1, arg2, ...)

var a = 10;
var b = 20;
var multiply = function (a, b) {
    console.log("multiply: ", a * b);
}
// function invokation

multiply(a, b)

console.log(multiply);

var num = parseInt(prompt("num: "));
// var checkNumEven = function (num) {
//     console.log(typeof num);
//     // string % number => number
//     console.log(typeof (num % 2));
//     if (num % 2 === 0) return true
//     else return false;
// }

var checkNumEven = (num) => {
    if (num % 2 === 0) return true
    else return false;
}
console.log(checkNumEven(num));

// arrow function

// var variable_name = (p1, p2,...) => {
//     // code
// }
// variable_name(arg1,...)

var sum = (a, b) => a + b;
console.log(sum(10, 25));





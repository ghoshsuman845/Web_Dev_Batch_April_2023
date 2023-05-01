// alert is used to show message and it wats until a user presses on OK
// if you press on OK => returns undefined
var a = alert("Only 2 mints left to complete the test. Hurry up!");
console.log(a);

// prompt(msg, [default])
// it has OK/Cancel button
// helps to take user input
// var age = parseInt(prompt("what's your age?", 18))
// console.log(typeof age);
// if (age >= 18) {
//     console.log("user is eligible");
// } else {
//     console.log("user not eligible");
// }

// "18" => 18
// "suman" => suman => NaN
// "" =>   => NaN

var length = parseInt(prompt("length:"))
var breadth = parseInt(prompt("breadth:"))

console.log( length+ breadth);

// 3.14 + "45" + "45"  = "3.144545"
var areaOfRect = 2 * (length + breadth); // 2 * dbhjgbs = num * string = NaN
// console.log("area of the rectangle is: ", areaOfRect);
console.log(`Area of the rectangle is: ${areaOfRect}`);


//confirm: returns a true or false
// cancel => false
// OK => true
var isClassTomorrow = confirm("Is there any class tomorrow?")
console.log(isClassTomorrow);

var fName = "suman";
var sName = "ghosh"
console.log(`my name is : ${fName} ${sName}`);

var title = null;

if (true) {
    title = "Hello there!"
    document.write(title)
} else {
    title = "page not found"
    document.write(title)
}


// syntax:
// let arr = new Array();
// let array = [];

let todo = ["complete office work", "bring groceries", "cook food", 123333, true, {a: "b"}, [1,2,3]]

// Accessing elements in array
// arr[0]
console.log(todo[todo.length - 1]);
console.log(todo.at(-1));

// length of array : arr.length
console.log(todo.length);

// adding elements in an array
todo[3] = "bring notebook"
console.log(todo);

// push : adds an element to the end of the array
let fruits = ["apple", "orange"]
fruits.push("grapes", "keenu")
console.log(fruits);

// unshift: adds an element at the start of an array
fruits.unshift("pear", "strawberry")
console.log(fruits);

//pop: removes an element from the end of an array
fruits.pop();
fruits.pop();
console.log(fruits);

// shift: removes elements from the beginning of an array
fruits.shift()
fruits.shift()
console.log(fruits);

// iterate over an array
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits[120] = "plum";
console.log(fruits.length);

//copying arrays

let arr = fruits;
arr.push("jamun")
console.log(arr);
console.log(fruits);
arr.push("jamun")
let a = 10;
let b = a;

console.log(a, b);
a = 20;
console.log(a, b);

// Methods in Array
// concat() : joins two or more arrays and returns the result
let array = fruits.concat(todo)
console.log(array);

// indexOf(): returns the first index of occurence of the element you're searching in an array, or returns -1 if element not found.
console.log(array.indexOf("jamun"));

// lastIndexOf(): returns the last index of occurence of the element.
console.log(array.lastIndexOf("jamun"));

// find(): returns the first element that you want to find
// array.find(func)
let nums = [1, 5, 8, 10]
function check(nums){
    return nums > 5;
}
console.log(nums.find(check));

// splice() : use it to modify(Add, remove or replace elements) an array
// arr.splice(start, deleteCount, item1, item2, ..., itemN)
// returns the deleted values
// does change the original array
let languages = ["JS", "rust", "c++"]
console.log(languages.splice(2, 1, "java", "python", "golang"));
console.log(languages);

//slice: gives you a portion of an array
// arr.slice(start,end)
// end index is exclusive
// returns the deleted items
// doens't effect the original array
console.log(languages.slice(1, 4));
console.log(languages);


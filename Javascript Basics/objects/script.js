// syntax:
// let obj = {
//     key1: value1,
//     key2: value2
//     key3: value3
// }
// let obj = new Object();

let info = {
    fName: "Suman",
    age: 20,
    city: "Delhi",
    hobbies: ["dance", "code", "draw"],
    greet: function () {
        console.log("hello");
    }
}

console.log(info);
// replace value inside objects
info.fName = "Ram"
console.log(info);

// adding key and value to an obj
info['sName'] = "Sharma";
console.log(info);

delete info['sName'];
console.log(info);

// accessing elements in object
console.log(info.hobbies);
console.log(info['city']);
info.greet();


let store = {
    flavours: ['strawberry', 'mango', 'kaju pista'],
    toppings: ['sprikles', 'choco chips'],
    containers: ['cone', 'cup', 'stick']
}

console.log(store.flavours[0]);
console.log(store.toppings[1]);
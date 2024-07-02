// array
// defines an array of names
let element:string[] = ["Ameema", "Sakina", "Zainab", "Naseem", "Saleem"];

// loop
// each
// for loop

for (let i = 0; i < element.length; i++) {
    console.log(element[i]);
}

// for (let index = 0; index < array.length; index++){
//     console.log(names[i]);
// }

// for each
element.forEach(names => {
    console.log(names);
});

// for of loop
for (const friendName of element) {
    console.log(friendName);
}

// let name1:string = "Ameema";
// let name2:string = "Saleem";
// let name3:string = "Chhipa";
// console.log(name1, name2, name3);

//console.log(name1);
//console.log(name2);
//console.log(name3);

for (let i = 0; i < element.length; i++) {
    console.log(`Hello, ${element[i]}! how are you today?`);
}

element.forEach(names =>  {
    console.log(`Hi, ${names}! how are you today?`)
});

for (const friendName of element) {
    console.log(`Dear, {friendName}! how are you?`)
};
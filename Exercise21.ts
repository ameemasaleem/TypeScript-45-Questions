//in object what we learned
//default typed object
//update property
//add new property
//define custom type property
//use any with object

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
/*let objectname = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6'

}; */
//name
//roll number
//grade

// let student = {
//     name: "Sakina",
//     rollnumber: "23",
//     grade: ["85", "90", "75"]
// };
// console.log(student.name);
// console.log(student.grade[1]);

// let products = {
//     name: "laptop",
//     price: "8000",
//     dscription: "high performance laptop with fast processeor"
//     }
// console.log(products.price);    

// //type interface
// interface Person {
//     name: string;
//     age: number;
//     city: string;
// }
// let Person1: Person ={
//     name: "john",
//     age: 30,
//     city: "london"
// }

// let Person2: Person ={
//     name: "john1",
//     age: 35,
//     city: "lahore"
// }
// console.log(Person1.name);
// console.log(Person2.name);

// //type annotation
// let myVariable: string = "Hello";

// //type infers
// let anotherVariable = 'world';

// //initial object
// let person = {
//     name: "john",
//     age: 20,
//     city: "lndon"
// }

// //updated property
// person.age = 35;
// person.city = "lahore";

// console.log(person);

// //add new property
// person["gender"] = "male";
// console.log(person)

// //define custom type property


// //any property
// let myVariables: any;

// myVariables = 10;
// myVariables = "hello";
// myVariables = true;

let objectContainingItems: {[key : string]: any } = {
"laptop": {
name: "laptop",
price: "8000",
description: "high performance laptop with fast processor"
},

"mouse": {
    name: "mouse",
    price: "10000",
    description: "high performance laptop with fast processor"
},

"keyboard": {
    name: "keyboard",
    price: "5000",
    description: "high performance laptop with fast processor "
}
}
console.log(objectContainingItems);



// array
// defines an array of names
var element = ["Ameema", "Sakina", "Zainab", "Naseem", "Saleem"];
// loop
// each
// for loop
for (var i = 0; i < element.length; i++) {
    console.log(element[i]);
}
// for (let index = 0; index < array.length; index++){
//     console.log(names[i]);
// }
// for each
element.forEach(function (names) {
    console.log(names);
});
// for of loop
for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
    var friendName = element_1[_i];
    console.log(friendName);
}
// let name1:string = "Ameema";
// let name2:string = "Saleem";
// let name3:string = "Chhipa";
// console.log(name1, name2, name3);
//console.log(name1);
//console.log(name2);
//console.log(name3);
for (var i = 0; i < element.length; i++) {
    console.log("Hello, ".concat(element[i], "! how are you today?"));
}
element.forEach(function (names) {
    console.log("Hi, ".concat(names, "! how are you today?"));
});
for (var _a = 0, element_2 = element; _a < element_2.length; _a++) {
    var friendName = element_2[_a];
    console.log("Dear, {friendName}! how are you?");
}
;

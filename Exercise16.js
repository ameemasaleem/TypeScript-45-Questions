"use strict";
let guestslist = ["Ameema", "Sakina", "Safiya", "Irfan", "Ameema Saleem"];
console.log("Great News! We found a bbigger table");
//unshift
guestslist.unshift("Hammad");
//splice
guestslist.splice(Math.floor(guestslist.length / 2), 0, "Hamza");
//push
guestslist.push("Cheetah");
console.log(guestslist);
//for each
guestslist.forEach(guest => {
    console.log(`Dear ${guest}, you all are coordially invited to dinner`);
});

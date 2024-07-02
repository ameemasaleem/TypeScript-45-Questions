let guestlists:string[] = ["Ameema", "Sakina", "Safiya", "Irfan"];

// print the name who can't make dinner
let unableAttend:string = guestlists.splice(1,1)[0];
console.log(`${unableAttend} can't make dinner`);

// push method
guestlists.push("Ameema Saleem");
console.log(guestlists);

//for Each method
guestlists.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
});
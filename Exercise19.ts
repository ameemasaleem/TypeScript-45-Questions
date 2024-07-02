let guestslists:string[] = ["Ameema", "Sakina", "Safiya", "Irfan", "Ameema Saleem"];

//print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only 2 guest");
guestslists.unshift("alice","bob");

//print message updated list
console.log("updated list of guest:",guestslists);

//remove guest from the list
while (guestslists.length > 2) {
    let removedGuest :string | undefined = guestslists.pop();
    if (removedGuest !== undefined){
        console.log(`Sorry, ${removedGuest}, we can't invite you`);
    }
}
// print a message to each of the two people still on your list, letting them
// console.log(guestslist);
guestslists.forEach(guest =>{
    console.log(`Dear ${guest}, you both are invited for the dinner`)
})
//splice method
//remove 2 name from the list
guestslists.splice(0, guestslists.length)

//print updated empty list
console.log("updated list of guest:",guestslists);
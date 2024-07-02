let guestslist:string[] = ["Ameema", "Sakina", "Safiya", "Irfan", "Ameema Saleem"];

//print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only 2 guest");
guestslist.unshift("alice","bob");

//print message updated list
console.log("updated list of guest:",guestslist);

//remove guest from the list
while (guestslist.length > 2) {
    let removedGuest :string | undefined = guestslist.pop();
    if (removedGuest !== undefined){
        console.log(`Sorry, ${removedGuest}, we can't invite you`);
    }
}
// print a message to each of the two people still on your list, letting them
// console.log(guestslist);
guestslist.forEach(guest =>{
    console.log(`Dear ${guest}, you both are invited for the dinner`)
})
//splice method
//remove 2 name from the list
guestslist.splice(0, guestslist.length)

//print updated empty list
console.log("updated list of guest:",guestslist);
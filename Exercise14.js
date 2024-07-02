"use strict";
// Define array of guest
let guestlist = ["Ameema", "Sakina", "Safiya", "Irfan"];
// Invite each guest for dinner
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
//map()
//invite guest
let invitation = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner`);
console.log(invitation);
//foreach method
invitation.forEach(invitations => {
    console.log(invitations);
});

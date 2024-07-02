let placeTovisit: string []= ["Paris","New York", "London", "Italy", "China"];

//print in original order
console.log("original order", placeTovisit);

//print array in alphabatical order without modifying the actual list
console.log("Alphabatical order:", placeTovisit.slice().sort());

//array is still in its original order by printing it
console.log("original order", placeTovisit);

//print array in reverse alphabatical order without changing the order
console.log("reverse order:", placeTovisit.slice().sort().reverse());

//array is still in its original order by printing it again.
console.log("original order", placeTovisit);

//reverse the order of your list. Print the array to show that its order has changed.
console.log("place order changed")
placeTovisit.reverse();
console.log(placeTovisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order:", placeTovisit.sort());
console.log(placeTovisit);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabatical order changed", placeTovisit.sort().reverse());
console.log(placeTovisit);
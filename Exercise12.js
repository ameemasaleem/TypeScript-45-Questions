"use strict";
for (let i = 0; i < element.length; i++) {
    console.log(`Hello, ${element[i]}! how are you today?`);
}
element.forEach(names => {
    console.log(`Hi, ${names}! how are you today?`);
});
for (const friendName of element) {
    console.log(`Dear, {friendName}! how are you?`);
}
;

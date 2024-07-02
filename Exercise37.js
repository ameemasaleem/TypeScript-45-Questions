function make_shirt1(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Typescript'; }
    console.log("Shirt size: ", size);
    console.log("Message:", message);
    console.log("Shirt has been created successfully!");
}
make_shirt1();
make_shirt1('Medium');
make_shirt1('Extra Large', 'Typescript is Fantastic!');

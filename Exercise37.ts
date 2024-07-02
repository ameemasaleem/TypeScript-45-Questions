function make_shirt1 (size: string= 'Large', message: string= 'I Love Typescript'): void {
    console.log("Shirt size: ", size);
    console.log("Message:", message);
    console.log("Shirt has been created successfully!");
}
make_shirt1();
make_shirt1('Medium');
make_shirt1('Extra Large', 'Typescript is Fantastic!');
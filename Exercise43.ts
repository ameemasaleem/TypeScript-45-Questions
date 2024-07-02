let magician_names2: string[] = ["David Blaine","Ricky Jay","Black Herman"];

function show_magicians2(magicians: string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}

function make_great2(magicians: string[]){
    let newMagicians: string[] = [];
    for (let magician of magicians){
        newMagicians.push("The Great " + magician + " is a world top most magician");
    }
    return newMagicians;
}
let greatMagicians1: string[] = make_great2([...magician_names2]);

make_great2(magician_names2);
show_magicians2(magician_names2);
show_magicians2(greatMagicians1);
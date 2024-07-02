let magician_names1: string[] = ["David Blaine","Ricky Jay","Black Herman"];

function show_magicians1(magicians: string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians: string[]){
    for (let i=0; i<magicians.length; i++){
        magicians[i] = "The Great " + magicians[i] + " is a world top most magician";
    }
}
make_great(magician_names1);
show_magicians1(magician_names1);
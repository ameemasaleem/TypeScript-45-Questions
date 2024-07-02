var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_names2 = ["David Blaine", "Ricky Jay", "Black Herman"];
function show_magicians2(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great2(magicians) {
    var newMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        newMagicians.push("The Great " + magician + " is a world top most magician");
    }
    return newMagicians;
}
var greatMagicians1 = make_great2(__spreadArray([], magician_names2, true));
make_great2(magician_names2);
show_magicians2(magician_names2);
show_magicians2(greatMagicians1);

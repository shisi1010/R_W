var dwarves = "He is a good man";

var arr = dwarves.toLowerCase().split(" ");

var s = "";

for (var i = arr.length - 1; i >= 0; i--) {
    if (i != arr.length - 1) {
        s = s + " " + arr[i];
    }
    else {
        s = arr[i].slice(0, 1).toUpperCase();
        s = s + arr[i].slice(1);
    }
}

console.log(s);
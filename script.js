var yazi = "yazitipi";
var numara = 132131;
var bool = true;
var nul = null;
var undif = undefined;
var na = NaN;

var yazi2 = yazi;

console.log({ yazi });
console.log({ yazi2 });

yazi2 = "değiştirilmiş yazı tipi";

console.log({ yazi });
console.log({ yazi2 });

var array = [1, 2, 3, 4];
var obj = { key1: "value1", key2: "value2" };
var func = function(){return 1};
class klas{
    constructor(){
        
    }
}

console.log(JSON.stringify(array),JSON.stringify(array2))
var array2 = array;
console.log(JSON.stringify(array),JSON.stringify(array2))
array2.pop();
console.log(JSON.stringify(array),JSON.stringify(array2))

function reverseString(str){
    var revere =""
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        revere = char + revere;
    }
    return revere
}
var statcent = "Hello Alien bhai brother";
var forAlien = reverseString(statcent);
console.log(forAlien)
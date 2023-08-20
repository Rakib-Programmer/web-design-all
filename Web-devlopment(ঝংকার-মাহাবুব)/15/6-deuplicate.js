var number = [3, 4, 7, 3, 11, 5, 7, 9, 54]
var unicName = []
for(var i = 0; i<number.length; i++){
    var element = number[i]
    var index = unicName.indexOf(element);
    if(element == -1){
        unicName.push(element);
    }
}
console.log("deuplicate is: ", unicName);
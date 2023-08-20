// var number = [ 45, 65, 78, 21, 43, 76, 65]
// var sum = 0
// for( var i = 0; i < number.length; i++){
//     var element = number[i];
//     sum = sum + element;
// }
// console.log(sum)

function arraySam(number){
    var sum = 0
    for( var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    } 
    return sum
}
var number = [ 45, 65, 78, 21, 43, 76, 65]
var result = arraySam(number);
console.log("result of the number", result)

var Total = arraySam([45, 54, 67, 32]);
console.log("Total of the number", Total)

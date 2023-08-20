// function evnify(num){
//     if(num%2 == 0){
//         console.log(num, ": is even number")
//     }
//     else{
//         console.log(num*2, ": is odd number")
//     }
// }
// evnify(20);
// evnify(13)


// function evnify(num){
//     if(num%2 == 0){
//        return num
//     }
//     else{
//         console.log(num*2, ": is odd number")
//     }
//     
// }
// var result = evnify(20)
//  var odd = evnify(13)
// console.log(result)
// console.log(odd)

// function evnify(num){
//     if(num%2 == 0){
//        return num
//     }
//     else{
//         console.log(num*2, ": is odd number")
//     }
//     return 500
// }
// var result = evnify(20)
//  var odd = evnify(13)
// console.log(result)
// console.log(odd)

// function evnify(num){
//     if(num%2 == 0){
//        return num
//     }
//     else{
//        return num*2
//     }
    
// }
// var result = evnify(20)
//  var odd = evnify(13)
// console.log(result)
// console.log(odd)

function evnify(num){
    var result;
    if(num%2 == 0){
       result = num
    }
    else{
        result = num*2
    }
    return result;
}
result = evnify(13)
 
console.log(result)

var squre = result*result
console.log(squre)

function even_all(number){
   var even_array = []
   for(var i = 0; i < number.length; i++){
    const num = number[i];
    var result = evnify(num);
    even_array.push(result);
   } 
   return even_array
}
var number = [3, 10, 5, 57];
var numse_even = even_all(number);
console.log(numse_even)

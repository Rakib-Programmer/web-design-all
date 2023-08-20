function addNumber(num1, num2){
    return num1 + num2
}
var result = addNumber(10, 20);
result = addNumber(10, 20, 40, 5)
console.log(result)

function addArgument(){
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result1 =addArgument(3, 5, 8, 9,30)
console.log(result1)
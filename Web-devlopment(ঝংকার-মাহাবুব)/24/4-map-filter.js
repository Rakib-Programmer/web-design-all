const Number = [3, 4, 6, 8, 9, 11]

// function square(element){
//         console.log(element)
// }
// const square = element=> element*element

// Number.map(function(element, index, array){
//     console.log(element, index, array)
// )}

// const result = Number.map(function(x){
//     return x * x
// })
// const result = Number.map(x => x * x)
// console.log(result);

// const bigger = Number.filter(x => x > 5)
const bigger = Number.filter(x => x < 5)
// console.log(bigger)


const isThere = Number.find(x => x < 5)
console.log(isThere)

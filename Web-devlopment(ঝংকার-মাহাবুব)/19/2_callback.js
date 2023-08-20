// function expalain_callback(name, age, task){
//     console.log('hello', name);
//     console.log('your age', age);
//     washHand()
//     takeShower()
// }
// function washHand(){
//     console.log('wash hand with soap')
// }
// function takeShower(){
//     console.log('Take shower')
// }
// expalain_callback('rakib', 21);
// expalain_callback('popy', 17 );


function expalain_callback(name, age, task){
    console.log('hello', name);
    console.log('your age', age);
    task()
}
function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower')
}
expalain_callback('rakib', 21, washHand);
expalain_callback('popy', 17, takeShower);


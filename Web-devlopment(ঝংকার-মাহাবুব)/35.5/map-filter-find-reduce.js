const nums=[12, 25, 37, 29, 50];




console.log(nums.map(num=>num*2))
console.log(nums.filter(num=>num>20))
console.log(nums.find(num=>num>23))
console.log(nums.reduce((sum, num)=>sum+num, 0))

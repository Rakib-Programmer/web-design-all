const ages = [12, 14, 16, 13, 18];
const ages2 = [32, 34, 54, 21]
const ages3  = [40, 65, 54, 76, 43, 66]
const result = ages.concat(ages2).concat([6]).concat(ages3);
// console.log(result)

const allAges = [...ages, ...ages2, ...ages3];
// console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum)

const takaPoisa = [650, 450, 250]
// const maximum = Math.max(takaPoisa)
const maximum = Math.max(...takaPoisa)
console.log(maximum)


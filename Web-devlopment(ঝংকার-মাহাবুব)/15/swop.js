var a =5;
var b = 7;
console.log("Beror swop a = ", a, "b = ", b);
var swop = a;
a=b;
b=swop;
console.log("after swop a = ", a, "b = ", b);


var p = 10;
var q = 20;
[p, q] = [q, p];
console.log("after swop p = ", p, "q = ", q);
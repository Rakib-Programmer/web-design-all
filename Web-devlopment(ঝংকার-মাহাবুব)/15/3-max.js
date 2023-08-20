var business = 850;
var minister = 600;
var sochib = 500;
var max = Math.max(business, minister, sochib);
console.log(max);

if(business > minister){
    if(business > sochib){
        console.log("business is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}
else{
   if(minister> sochib){
    console.log("minister is biggers")
   }
   else[
    console.log("sochib is biggers")
    
   ]
}
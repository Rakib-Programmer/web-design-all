// একই কাজের জন্য একই কোড বারবার লেখা লাগে তখন ফাংশান  লিখতে হয় 
function evenify(num){
    if(num%2 == 0){
        console.log(num, ": is even number")
    }
    else{
        console.log(num, ": is odd number")
    }
}
function evenifyAll(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
      // এখানেও লেখা যায় 
        if(num%2 == 0){
            console.log(num, ": is even number")
        }
        else{
            console.log(num, ": is odd number")
        }
    }
}
nums = [5, 49, 34, 23, 43, 35]
evenifyAll(nums)
friendAge = [29, 12, 34, 54, 65 ]
evenifyAll(friendAge)
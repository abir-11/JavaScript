//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(count2){
let result2=0;
for(let char of count2){
    
    if(char==='0'){
        result2++;
        
    }
    
    
}

return result2;
}
let count='01010101010';
let result=count_zero(count);
console.log(result);
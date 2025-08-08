//Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let result='';
for(let i of numbers){
    result+=i;
}

console.log(result);
console.log(typeof result);
let finalOutPut=[result];
console.log(finalOutPut);
console.log(typeof finalOutPut);
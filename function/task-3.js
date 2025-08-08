//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array,length){
let sum=0;
for(let i of array){
    sum+=i;

}
let result= sum/length;

return result;

}
let arr=[1,2,3,4];

let length1=arr.length;

console.log(length1);

let result2=make_avg(arr,length1);

console.log(result2);
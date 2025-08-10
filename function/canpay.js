function canPay(array,num){
let result=0;
if(array.length===0){
    return "arr3 is Empty";
}
for(let i of array){
    result+=i;
}
    if(result >= num){
       return true;
    }
    else{
        return false;
    }


}
let arr=[1,2,5];
let arr1=[1,5,5];
const number=10;
console.log(canPay(arr1,number));
// console.log(canPay(arr,number));
console.log(canPay(arr,number));
let arr2=[];
console.log(canPay(arr2,number));
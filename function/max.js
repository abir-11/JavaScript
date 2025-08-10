function findMax(array){
    let num=array[0];
 for(let i=1;i<array.length;i++){
    if(array[i]>num){
        
        num=array[i];
    }
 }
 return num;
}
let arr=[12,13,34,15,16,1,2,3,5];
console.log(findMax(arr));
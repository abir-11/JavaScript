function  isSame(arr1 , arr2 ) {
   if(Array.isArray(arr1)===false || Array.isArray(arr2)===false){
    return "Invalid"
   }

   if(arr1.length !=arr2.length){
    return false;
   }
   let index=[0];
 for(let i of arr1){
    if(i !==arr2[index]){
        return false;
    }
    index++;
 }
 return true;

}
console.log(isSame([1 , "4" , 4] ,[1 , 4  , 4]))

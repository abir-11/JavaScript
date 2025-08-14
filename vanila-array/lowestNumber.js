const heights2 = [167, 190, 120, 165, 107];
 let array=heights2[0];
for(let i of heights2){
   
    if(i<array){
      array=i;
      
    }

}
console.log(array);


function minValue(heights2){
    let arr=heights2[0];
    for(let i of heights2){
        if ( i<arr){
            arr=i;
            
        }
    }
return arr;
}
console.log(minValue(heights2));
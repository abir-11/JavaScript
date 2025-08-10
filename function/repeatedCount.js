function repeatedCount(array,num){
    let count=0;
    for(let arrays of array){
      if(arrays===num){
        count++
      }
    }
    return count;
}

let numbers = [5,6,11,12,98, 5];
let number=25;
console.log(repeatedCount(numbers,number))
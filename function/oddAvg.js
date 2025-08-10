function oddAvg(number){
    let result=0;
   let odds=[]
for(let i of number){
  if(i%2===1){
    odds.push(i);
  }
}
for(let numbers of odds){
    result+=numbers;
}
let average=result/odds.length;
return average.toFixed(2);
}
let arr=[1,2,3,4,5,6,7];
console.log(oddAvg(arr));
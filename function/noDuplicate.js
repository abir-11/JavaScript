function noDuplicate(array){
  let newAarry=[];
  for(let items of array){
    if(newAarry.includes(items)===false){
        newAarry.push(items);
    }
  }
  return newAarry;
}
let name=["a","a","b","c","b","d","c","e"];
let number=[1,3,2,4,1,2,3,4];
console.log(noDuplicate(name));
console.log(noDuplicate(number));
const today=new Date();
console.log(today);
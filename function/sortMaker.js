function sortMaker(...arrs){
    let [a,b]=arrs;
  if(a>0&&b>0){
    arrs.sort(function(a,b){
        return b-a;
    })
    
  }
  if(a===b){
    return "equal";
  }
  if(a<0||b<0){
    return "invalid"
  }
return arrs;
}
  

console.log(sortMaker(2,-33));
console.log(sortMaker(4,5))
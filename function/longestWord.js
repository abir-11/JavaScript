function longestWord(str){
   let long=str.split(' ');
   let word='';
   for(let i of long){
    if(i.length > word.length){
        word=i;
    }
   }
   return word;
}
let string=" I am learning Programming to become a programmer";
let result=longestWord(string);
console.log("The longer word:",result);
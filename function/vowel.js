function countVowel(chars){
  let count=0;
  for(let char of chars){
    if(char==='a'||char==='e'||char==='i'||char==='o'||char=='u'||char==='A'||char==='E'||char==='I'||char==='O'||char=='U'){
    count++;
  }
  }
  return count;
}
let str='aibdeuhfgbcscc';
console.log(countVowel(str));
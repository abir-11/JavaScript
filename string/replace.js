let str='X';
let text=str.replace('X', 'Y');
console.log(text);
let str1="i am a good boy";
let text2=str1.split(' ');
console.log(text2);
let letter='';
for(let word of text2){
    letter +=word[0].toUpperCase()+word.slice(1)+' ';
}
console.log(letter);
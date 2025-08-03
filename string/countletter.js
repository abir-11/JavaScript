//Count how many times a string has the letter a
let str='abir arafat';
 let count=0;
for(let i=0;i<str.length;i++){
   
    if(str[i]=='a'){
       count++;
    }
   
}
 console.log(count);
 //Count how many times a string has the letter a or A

let str1=["Apple","banana","Avocado","Mango"];
let count1=0;
for(let word of str1){
    for(let ch of word){
        if(ch==='a'||ch=='A'){
            count1++;
        }
    }
}
console.log(count1)
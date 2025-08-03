let str1=["Apple","banana","Avocado","Mango"];
let count=0;
for(let word of str1){
    
    for(let ch of word){
       
        if(  ch.toLowerCase()==='a'|| ch.toLowerCase()==='e'|| ch.toLowerCase()==='i'|| ch.toLowerCase()==='o'||ch.toLowerCase==='u'){
            count++;
        }
    }
}
console.log(count);
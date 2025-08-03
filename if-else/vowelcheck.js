let alphabet='rrr';
let hasVowel=false;
for(let i =0;i<alphabet.length;i++){
    let ch=alphabet[i].toLowerCase();
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
        hasVowel=true;
        break;
    }
}
if(hasVowel){
    console.log("they has been vowel");
}
else{
    console.log("they has been not vowel")
}

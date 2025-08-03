let sentence='I am a good boy';
const reverse=sentence.split('').reverse().join('');
console.log(reverse);

let str="Mississippi";
console.log(str.indexOf("i",3));

const myObject={
    a:1,
    b:2,
    c:3
};
for(let prop in myObject){
    console.log(myObject[prop]);
}
const x="";
if(!x.length){
    console.log("Hye")
}
else{
    console.log("Hi")
}

const string="Hello";
string[0]="h";
console.log(string);//Hello
let newstr =string.replace("H", "h");
console.log(newstr);//hello
//Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
let number=[];
for(let i of numbers){
    if(i%2==0){
        number.push(i)
    }
}
console.log(number);

const evenNumber=numbers.filter(num=>num%2===0);
console.log(evenNumber);
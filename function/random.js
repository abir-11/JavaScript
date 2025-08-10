function randomNumber(max,min){
    return (Math.floor((Math.random()*(max-min+1))+min))
}
let max=20;
let min=10;

console.log(randomNumber(max,min));


let result=Math.floor(Math.random()*10000)+1;
console.log(result);
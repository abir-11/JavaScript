function cubeNumber(num){
    if(typeof num!== 'number'|| num<0){
return("invalid")
    }
    
    return num*num*num;
}
console.log(cubeNumber(-10))
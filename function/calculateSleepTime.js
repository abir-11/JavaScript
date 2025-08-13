function calculateSleepTime(time){
    
let sum=0;
for(let i of time){
    if(typeof i !== "number"){
        return "invalid"
    }
    sum+=i;
}
    let hour=Math.floor(sum/3600);//hour
    let remainder1=sum%3600;
    let minute=Math.floor(remainder1/60);//min
    let second=remainder1 % 60;//sec
    let result={
        hour:hour,
        minute:minute,
        second:second
    }
    return result;
}
let sleepTime=[1000,499,519,'300'];
console.log(calculateSleepTime(sleepTime))
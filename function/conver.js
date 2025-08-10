function inchToFeet(number){
    return `${number/12} ft`
}
console.log(inchToFeet(75))

// function--2
function inchToFeet2(number){
    const feet=parseInt(number/12);
    const inch=(number % 12);
    return `${feet} ft ${inch} inch`
}
console.log(inchToFeet2(75));
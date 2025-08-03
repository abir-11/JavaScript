//program will read from the console a random positive non zero number and determine if it is a power of 2. input 512 1022 output yes no
let num=1022;
 if (num > 0) {
    if ((num & (num - 1)) == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

else if(num==0){
    console.log("Zero is a not valid input");
}
else {
    console.log("negative is not valid");
}
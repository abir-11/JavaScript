let temp=30;
if(temp<0){
    console.log("Freezing weather");
}
else if(temp>=0 && temp<10){
    console.log("Very cold");
}
else if(temp>=10 && temp<20){
    console.log(" cold");
}
else if(temp>=20 && temp<30){
    console.log("Normal");
}
else if(temp>=30 && temp<40){
    console.log("It's hot weather");
}
else{
    console.log("Very hot weather");
}
let age=62;
const student=800*(50/100);
const senior=800*(85/100);
if(age<10){
    console.log("Ticket Free");
}
else if(age>=10 && age<25){
    console.log("Students get a 50% discount:",student,"tk");
}
else if(age>=60){
    console.log("Senior citizens gets a 15% Discount:",senior,"tk");
}
else{
    console.log(" Regular ticket fare 800 tk")
}

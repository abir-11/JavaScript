
let total1=0;
let total2=0;
for(let i=1;i<=20;i++){

    if(i % 3==0 || i % 5==0){
    console.log(i,"Premimun Row \n Ticket Price :800");
    total1+=800;
  }
else{
    console.log(i,"Normal Row \n Ticket price :500");
    total2+=500;
 }


}
let total=total1+total2;
console.log("Total income :",total);
//0<value<180 of the triangle are enter through the keyboard;
let num1=110;
num2=45;
num3=45;
const sum=(num1+num2+num3);
if(num1>0&&num2>0&&num3>0&&num1<180&&num2<180&&num3<180){
     if(sum==180){
        console.log("yes this is triangle");
     }
     else{
        console.log("no this is not triangle");
     }
}
else{
    console.log("Invalid number")
}
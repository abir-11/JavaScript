let weight=62;
hight=1.7526;
const BMI=((weight)/(hight*hight)).toFixed;
if(BMI<18.5){
    console.log("Your BMI:",BMI);
    console.log("You are underweight");

}
else if(BMI>=18.5 && BMI<=24.9){
    console.log("Your BMI:",BMI);
    console.log("You are normal");
}
else if(BMI>=25 && BMI<=29.9){
    console.log("Your BMI:",BMI);
    console.log("You are overweight");
}
else{
    console.log("Your BMI:",BMI);
    console.log("You are obese");
}

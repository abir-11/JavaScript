function calculateElectronicsBudget(...number){
  let totalBudget=0;
   for(let i of number){
    totalBudget+=i;
   }
   return totalBudget;
}
  let  laptop = 35000,
    tablet = 15000 ,
    mobile = 20000 ;
    
console.log(calculateElectronicsBudget(laptop,tablet,mobile));
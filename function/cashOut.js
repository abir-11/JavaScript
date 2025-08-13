function cashOut(money){
    if(typeof money !=="number" || money <0){
        return "Invalid";
    }
    let charge=money*(1.75/100);
    let finalCharge=charge.toFixed(4);
    let result=parseFloat(finalCharge);
    return result;
}
console.log(cashOut(2000));

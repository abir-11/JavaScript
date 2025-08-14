function  findAveragePhonePrice(phone){
let totalPrice=0;

for(let i of phone){
   
   totalPrice+=i.price;

  
}

return parseFloat((totalPrice/phone.length).toFixed(2));

}
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
    console.log(findAveragePhonePrice(phones))
let productDescription="This product is SALE .";
if(productDescription.toLowerCase().includes('cotton')){
  console.log("Material: Cotton");
}else if(productDescription.toLowerCase().includes('sale')){
    console.log("Category: Sale Item")
}
else if(productDescription.toLowerCase().includes('new arrival')){
    console.log("Status: New Arrival")
}
else if(productDescription.toLowerCase().includes('limited edition')){
    console.log("Availability: Limited")
}
else{
    console.log("Tag:General");
}


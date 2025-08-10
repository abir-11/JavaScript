function findAddress(address){
    return `${address.street || '__'}, ${address.house || '__'}, ${address.society||'__'}`
}

console.log(findAddress({
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}));
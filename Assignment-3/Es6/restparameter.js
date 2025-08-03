function sum(...args){
    let total=0;
    for(const a of args){
        total+=a;
         
    }
    return total;
   
   
}
let result=sum(1,2,3);
console.log(result);

function combine(...args){
    return args.reduce(function(prev,curr){
        return prev+' '+curr;
    })
}
let message = combine('Javascript' ,'Rest','parameter');
console.log(message);


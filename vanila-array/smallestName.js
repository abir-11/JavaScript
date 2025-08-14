const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let arr=heights2[0];
for(let i of heights2){
    if( i.length<arr.length){
        arr=i;
    }
}
console.log(arr);

function smallName(arr){
    let arr2=arr[0];
    for(let i of arr){
        if(i.length<arr.length){
            arr=i;
        }
    }
    return arr;
}
console.log(smallName(heights2));
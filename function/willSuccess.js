function willSuccess(marks){
    if(Array.isArray(marks)===false){
     return "Invalid"
    }
  let pass=0;
  let fail=0;
  for(let i of marks){
    if(i>=40){
       pass++;
       
    }
    else{
       fail++;
       
    }

  }
   if(pass>fail){
        return true;
    }else{
        return false;
    }
}
let arr=90;
console.log(willSuccess(arr));
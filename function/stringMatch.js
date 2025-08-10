function stringMatch(str1,str2){
  if((typeof str1==='string' && str1.trim().length>0) &&(typeof str2==='string' && str2.trim().length>0 )){
    console.log("valid")
    if (str1.includes(str2)){
    return true;
}else {
    return false;
}

  }

  

}
console.log(stringMatch("jhon","hon"))
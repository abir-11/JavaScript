function  resultReport( marks ) {
    if(Array.isArray(marks) ===false){
        return "Invalid";
    }
    let score=0;
    let pass=0;
    let fail=0;
    for(let mark of marks){
        score+=mark;
        if(mark>40){
            pass++;
        }
        else{
            fail++;
        }
      
    }
   let finalScore=Math.round(score/marks.length);
   

  let Object={
    finalScore:finalScore,
    pass:pass,
    fail:fail
  }
  if(Number.isNaN(Object.finalScore)){
    Object.finalScore=0;
  }
  
  return Object;
}
console.log(resultReport(100))


/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var result=area/2;
console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(45000>=money && money>10000){
    console.log("Laptop");
}
else if(10000>=money && money>9999){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
 var lastDay = 4 ;
//write your code here
        
     if(lastDay>=4 &&lastDay<5){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest");
    }
    else if(lastDay>=5&&lastDay<6){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest");
    }
     else if(lastDay>=6&&lastDay<7){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine");
    }
    else if(lastDay>=7&&lastDay<8){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine\n7 -rest");
    }
     else if(lastDay>=8&&lastDay<9){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine\n7 -rest\n8 -rest");
    }
     else if(lastDay>=9&&lastDay<10){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine\n7 -rest\n8 -rest\n9 -medicine");
    }
    else if(lastDay>=10&&lastDay<11){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine\n7 -rest\n8 -rest\n9 -medicine\n10 -rest");
    }
     else if(lastDay>=11){
        console.log("1 -rest\n2 -rest\n3 -medicine\n4 -rest\n5 -rest\n6 -medicine\n7 -rest\n8 -rest\n9 -medicine\n10 -rest\n11 -rest");
    }
    else{
        console.log("no medicine")
    }


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.includes('.pdf') || fileName.charAt(0)==='#'||fileName.includes('.docx')){
    console.log('Store');
}
else{
    console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" ,
               roll: 1014 ,
               department: "cse"
             };
//write your code here
var email=student.name.toLowerCase()+student.roll+"."+student.department+"@ph.ac.bd"
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var result2=startingSalary * ((1+.05)**experience);
    console.log(result2.toFixed(2));

/** Problem -03 ( Medicine Planner ) */
 var lastDay = 13 ;
//write your code here
var number=11;
     
     if(3<number && number<=30){
        
        if(lastDay>=4 &&lastDay<5){
        console.log("1 -rest\n2 -rest\n3 - medicine\n4 -rest");
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

     }
     else{
        console.log("No treatment")
     }


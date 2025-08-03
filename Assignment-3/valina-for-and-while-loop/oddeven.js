// subtask-1:
// Find all the odd numbers from 61 to 100.
for(let i=61;i<=100;i++){
    if(i%2!==0){
        console.log("Odd number:",i);
    }
}

let j=61;
while(j<=100){
   if(j%2!==0){
        console.log(j,":Odd number");
    }
    j++;  
}
// subtask-2
// Find all the even numbers from 78 to 98.
for(let i=78;i<=98;i++){
    if(i%2===0){
        console.log("Even number:",i);
    }
}

let k=78;
while(k<=98){
    if(k%2===0){
        console.log(k,":Even number");
    } 
   k++;
}
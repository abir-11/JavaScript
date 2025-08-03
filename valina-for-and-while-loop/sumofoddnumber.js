// Subtask-1:
//Display sum of all the odd numbers from 81 to 131.
 let sum=0;
for(let i=81;i<=131;i++){
    
    if(i%2!==0){
       sum+=i;
        
    }
    
}

 console.log("sum of odd number:",sum);

 let j=81;
 let s=0;
 while(j<=131){
    if(j%2!==0){
        s+=j;
        
    }
    j++;
 }
 console.log(s,":sum of odd number");
 //Subtask-2:
 //Display sum of all the even numbers from 206 to 311.
 let add=0;
 for(let i=206;i<=311;i++){
    if(i%2===0){
        add+=i;
    }

 }
  console.log("sum of even number",add);
  let k=206;
  let added=0;
  while(k<=311){
    if(k%2===0){
        added+=k;
    }
    k++;
  }
   console.log(added,":sum of even number");
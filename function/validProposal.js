function validProposal(person1,person2){
    if((typeof person1 !=="object") || (typeof person2 !=="Object")){
    return  'Invalid';
    }
 if(person1.gender===person2.gender || Math.abs(person1.age-person2.age)>7){
    return false;
 }

 else {
    return true
 }
}
let person1={name:"Rahul",gender:"male",age:28};
 let person2={name:"Mila",gender:"female",age:20};

console.log(validProposal(person1,person2));
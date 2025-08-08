//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
let number=[1,2,3];
let numbers=[...number];
 numbers[0]=99;
 console.log("Orginal:",number);
 console.log("Copy:",numbers);

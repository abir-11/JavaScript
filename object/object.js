//task-1
//Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);
//task-2
//For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.passengerCapacity=5;
console.log(car);
//task-3
//Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
//task-4
//Count the number of properties.
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let propertys=Object.keys(students).length;
let keys=Object.keys(students);
console.log(propertys);
console.log(keys);
for(let i in keys){
    const key=keys[i];
    console.log(key + ":" + students[key]);

}
//Task-5 (Hard)
//Loop through an object and print the key-value pairs with their types
let myObject={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
let key=Object.keys(myObject);
for(let i in key){
    let keys=key[i];
    console.log("Key:" + keys +" | " + "type:" +' '+ myObject[keys]);
}
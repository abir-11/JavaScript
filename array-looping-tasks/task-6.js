//Given an array of student objects, print each student’s name and marks.
let student=[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];
for (let students of student){
    console.log(`${students.name} scored ${students.marks}`)
}
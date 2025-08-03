let employee={
     firstName: "John",
      lastName: "Doe", 
      employeeId: 101,
       departmentCode: "HR"
}
employee.CompanyName="AlphaCorp";
console.log(employee);
let last=employee.lastName.toLowerCase().slice(0,3);
let company=employee.CompanyName.toLowerCase();
console.log(last+employee.employeeId+"@"+company+".com");
let tempPass=last+"1#"+employee.departmentCode;
console.log("TempPass:",tempPass);
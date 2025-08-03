/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.includes('.pdf') || fileName.charAt(0)==='#'||fileName.includes('.docx')){
    console.log('Store');
}
else{
    console.log('Delete');
}
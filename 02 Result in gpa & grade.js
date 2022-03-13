/**
 * 
 * Prepare the resulting system where results can be found in Grade and GPA
 *  
 */

let student_name = "sabbir";
let marks = 22;

if (marks <= 32) {

        console.log(`oh! very sad ${student_name}! for your "dabba mara" in your exam.`);

} else if (marks >= 33 && marks <= 39) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 1.00 - and your grade is D`);

} else if (marks >= 40 && marks <= 49) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 2.00 and your grade is c `);

} else if (marks >= 50 && marks <= 59) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 3.00 and your grade is b`);

} else if (marks >= 60 && marks <= 69) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 3.50 and your grade is A-`);

} else if (marks >= 70 && marks <= 79) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 4.00 and your grade is A`);

} else if (marks >= 80 && marks <= 100) {

        console.log(`Congratulation ${student_name} ! You passed the exam your gpa 5.00 and your grade is A`);

} else {

        console.log(`${student_name}! maybe you dabba marso in your exam or something else.`);

}
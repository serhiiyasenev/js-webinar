'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;

    if(score < 0 || score > 100){
        gradeOfStudent = 0;
    } else if(score>=90){
        gradeOfStudent = 5;
    } else if(score>=80){
        gradeOfStudent = 4;
    } else if(score>=70){
        gradeOfStudent = 3;
    } else if(score>=60){
        gradeOfStudent = 2;
    } else {
        gradeOfStudent = 1;
    } 
    return gradeOfStudent;
}

console.log(grade(1250));
console.log(grade(-1250));
console.log(grade(101));
console.log(grade(100));
console.log(grade(99));
console.log(grade(80));
console.log(grade(70));
console.log(grade(61));
console.log(grade(60));
console.log(grade(59));
console.log(grade(1));
console.log(grade(0));
console.log(grade(-99));

module.exports = grade;
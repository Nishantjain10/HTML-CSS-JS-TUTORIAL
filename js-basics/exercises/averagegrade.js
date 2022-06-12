const marks = [80,80,80]
console.log(calculateGrade(marks));

function calculateGrade(marks) {
     let sum = 0;
     for (let mark of marks)   
        sum += mark;
     let average = sum / marks.length;

     if (average < 60) return 'F';
     if (average < 70) return 'D';
     if (average < 80) return 'C';
     if (average < 90) return 'D';
     return 'A';
}
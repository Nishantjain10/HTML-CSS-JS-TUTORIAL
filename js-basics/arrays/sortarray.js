// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


const courses = [
    { id:1, courseName:'Node.js'},
    { id:2, courseName:'javascript'},
];

courses.sort(function(a, b) {
    const nameA = a.courseName.toUpperCase();
    const nameB = a.courseName.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);
// let isApproved = false; / / Boolean Literal
// let firstName = undefined;
// let selectedColor = null;


//objects
// let person = {
//     myName: 'Nishant',
//     age: 30
// };

//Dot Notation
// person.myName = 'John';

// Bracket Notation
// let selection = 'myName';
// person[selection] = 'Mary';

// console.log(person.myName);


//Arrays
// let selectedColors = ['red' , 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors);

//Functions
// Performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// //Calculating a Value
// function square (number) {
//    return number * number;
// }

// console.log(square(2));


// greet('John', 'Smith');


//OOP>>Encapsulation-->
//procedular programming
    // let baseSalary = 30_000;
    // let overTime = 10;
    // let rate = 20;

    // function getWage(baseSalary, overTime, rate) {
    //     return baseSalary + (overTime * rate);
    // }

//objectOrientedProgramming
// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate)
//     }
// };
// console.log(employee.getWage());


//OPERATORS
//Arithmetic Operators
//   let x = 10;
//   let y = 2;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); //square

//increment
// console.log(++x)

//decrement
// console.log(x++)
// console.log(x)


//Assignment operator
// console.log(x++);
// x + 1;    //equal to x++

// x = x + 5;
// console.log(x += 5);

//x = x * 3;
// console.log(x *= 3);



//Comparision Operators
// let x = 1;
//relational-operators
// console.log(x > 0); //true
// console.log(x >= 1) //true
// console.log(x <= 1) //true
// console.log(x < 1) //false

//equality
// console.log(x === 1);
// console.log(x !== 1);


//EQUALITY Operators
// console.log (1 === 1); //strict equality (Type+Value) true
// console.log ('1' === 1) //false (different type and value!)

//lose equality
// console.log(1 == 1); //true (Only Value Verification!)
// console.log('1' == 1); //true (Will convert 1 to a string!)
// console.log(true == 1); //true (will convert 1 to a boolean!)


//TERNARY Operators
//If a customer has 100 points
//He is a gold member
//Else silver

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver'; // validate (point>100) ?(if true) gold(then gold) else silver.

// console.log(type)


//LOGICAL Operators
//logical AND
//logical OR
//logical Not

//Example
//If a user has good credits score
//High income
//User is eligible for a loan.

//logical And (&&)
//return true if both operands are true
// console.log(true && true);  //true
// console.log(true && false); //false as one operand is not true.

// let highIncome = true;
// let goodCreditScore  = true;
// let eligibleForLoan = (highIncome && goodCreditScore);
// console.log(eligibleForLoan)


//logical OR (||)
//return true if one operand is true
// console.log(true || false); //true, as one value is true!

// let highIncome = true;
// let goodCreditScore  = false;
// let eligibleForLoan = (highIncome || goodCreditScore);
// console.log(eligibleForLoan)


//logical NOT (!)
//return if both values are false.
//return if not eligible for loan refuse application


// let highIncome = false;
// let goodCreditScore  = false;
// let eligibleForLoan = (highIncome || goodCreditScore);
// let applicationRefuse = !eligibleForLoan;

// console.log('Eligible for loan', eligibleForLoan)
// console.log('Application Refused', applicationRefuse)



// exercise (Swapping Variables)
// let a ='red';
// let b = 'blue';

// c = a;
// a = b;
// b = c; (Loop & swap)

// console.log(a)
// console.log(b)


//exercise-maxNumber
// let number = max(4,2)
// console.log(number)

// function max(numberOne, numberTwo) {
// return (numberOne>numberTwo) ? numberOne : numberTwo;
// }


//exercise-landscape/Portrait
// let checkCondition = isLandscape(40,56)
// console.log(checkCondition);
// console.log(isLandscape(800, 900));

// function isLandscape(width, height) {
//   return (width > height);
// }

//exercise-FizzBuzz
// console.log(fizzBuzz(false));

// function fizzBuzz(input) {
//     if(typeof input !== 'number')
//     return NaN;

//     if((input % 3 === 0) && (input % 5 === 0))
//     return('fizzbuzz');

//     if(input % 3 === 0)
//     return('fizz');

//     if(input % 5 === 0)
//     return('buzz');

//     return(input)
// }


//exercise-evenOdd Numbers
// showNumbers(10)

// function showNumbers(limit) {
//     // for (let i = 0; i <= limit; i++) {
//     //     if(i % 2 === 0) console.log(i, ' Even');
//     //     else console.log(i, 'Odd');


//     const message = i % 2 ===0 ? 'EVEN': 'ODD'
//     console.log(i, message)
//     }
// }


//exercise-arrayTruthyCheckValues
// const array = [0, null, undefined, '', 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for(let value of array)
//     if(value)
//     count++;
//     return count;
// }


// exercise- stringProperties
// const employee = {
//     empName: 'Jones',
//     empSalary: 50000,
//     empCompany: 'Starbucks' ,
//     empContact: 9109000011
// };

// showEmployeeDetails(employee);

// function showEmployeeDetails(obj) {
//     for (let key in obj) {
//      if(typeof obj[key] === 'string')
//      console.log(key, obj[key])
//     }
// }


// exercise-sumLimits
// console.log(sum(10));

// function sum(limit) {
//  let sum = 0;

//       for (let i = 1; i <= limit; i++) 
//        if (i % 3 === 0 || i % 5 === 0)
//        sum += i;

//     return sum;
// }



// exercise - Average Grade
// const marks = [80,80,50]
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//      if (average < 60) return 'F';
//      if (average < 70) return 'D';
//      if (average < 80) return 'C';
//      if (average < 90) return 'D';
//      return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)   
//        sum += value;
//     return sum / array.length;
// }

// exercise-showStars
// showStars(6);

// function showStars(rows) {
//     for(let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for(let i = 0; i < row; i++)
//         pattern += '*'
//         console.log(pattern);
//     }
// }

// Exercise show-primes
// showPrimes(20);

// function showPrimes(limit) {
//      for(let number = 2; number <= limit; number++)
//          if (isPrime(number)) console.log(number);
// }

// function isPrime(number){
//     for (let factor = 2; factor < number; factor++) 
//        if (number % factor === 0) 
//         return false;

//     return true;
// }


//OBJECTS!!

// let radius = 1;
// let x = 1;
// let y = 1;

//Object-oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw')
//     }
// }

// circle.draw() //method

// function draw() {}
// function move() {}



// Factory Functions

// function createCircle(radius) {
//     return {
//         radius,

//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle();
// console.log(circle2);



//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1); //use 'new' in constructor function
//                               //we use 'this' in constructor function
//                               //Pascal Notation is used in constructor function!
//                               //familiar to developers in c#,java
                              

//Dynamic Nature Of Objects
// const circle = {
//     radius: 1
// };

// //cannot reassign constant circle = {}
// //can define propertied of objects dynamically

// circle.color = 'yellow'
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);



// //Constructor Property

// //factory function
// function createCircle(radius) {
//          return {
//              radius,
    
//              draw() {
//                  console.log('draw');
//              }
//          };
//  }

//  const circle = createCircle(1);

//  //constructor function
//  function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

//     const another = new Circle(1);



// //circle.constructor 
// //--{Built in javascript constructor}

// let x = {};

// //let x = new Object();

// new String(); //'', "", ``
// new Boolean(); //true,false
// new Number(); //1,2,3



//Functions Are Object

// //constructor function
//   function Circle(radius) {
//      this.radius = radius;
//      this.draw = function() {
//          console.log('draw');
//      }
//  }

// //circle.name
// //circle.length
// //circle.constructor

// //  const Circle1 = new Function('radius', `
// //  this.radius = radius;
// //  this.draw = function() {
// //      console.log('draw');
// //  }
// //  `);

// //  const circle = new Circle1(1);

// Circle.call({}, 1)   //--> new Circle(1);
//                      // {} --> specifies target of this

// Circle.apply({}, [1, 2, 3])  //apply is used for array

//  const another = new Circle(1);


// Value vs Reference Types 

//Value(Primitives)         //Reference Types(Objects)
//-->Number                 //-->Number
//   Boolean                // Function
//   String                 // Array
//   Symbol
//   Undefined
//   Null

// let x = { value : 10 };
// let y = x;

// x.value = 20;

//Primitives are copied by their values
//Objects are copied by their reference

// let obj = { value: 10 }; 

//  function increase(obj) {
//         obj.value++;
//         }

//     increase (obj);
//     console.log(obj);


//Enumeration Properties of an Object!

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };

// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);

//     for (let entry of Object.entries(circle))
//     console.log(entry);

// if ('radius' in circle) console.log('yes');

// // function Object() {}
// // Object.keys()



//Cloning Objects!
// const circle = {
//      radius: 1,
//      draw() {
//          console.log('draw')
//      }
//  };

// // const another = {};
// // for (let key in circle)
// //     another[key] = circle[key];

// //const another = Object.assign({}, circle)

// const another = { ...circle };

// console.log(another);


//Garbage Collection
//To find the variables or constants that are no longer used 
//and deallocate the memory that was allocated to them earlier
// let circle = {};
// console.log(circle);


//Math Object 
//Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }
  
//math.round(1.9)
//output - 2

//math.max(1,2,3,4,5)
//output - 5

//math.min(1,2,3,4,5)
//output - 1




// String Object

// //String Primitive
// const message = ' This is my first message ';
// //message.length
// //message[0] ---> T
// //message.includes('my' --> true)
// //message.startsWith('This') --> True
// //message.startsWith('this') --> True
// //message.endsWith('e') ---> True
// //message.indexOf('my') --> 8
// //message.replace('first','second')  --> This is my second message
// //message.toUpperCase()
// //message.trim()  gets rid of all whitespace before and after our message
// //message.split(' ')

// //String Object
// const another = new String('hi') 


// // const message = ' This is my \'first message';
// // const message = ' This is my\n first message';



//Template Literals ES6 ``

// const message = ' This is my\n first message';
// const employeeName = 'John';

// console.log(message);

// const another = 
// `Hi ${employeeName} ${2 + 3},

// Thank you for joining in my mailing list.

// Regard,
// Mosh`;

// console.log(another);



//Date Object

// const now = new Date();
// const date1 = new Date('May 11 2018 9:00');
// const date2 = new Date(2018, 4, 11, 9, 0);

// now.setFullYear(2017);


//Address Object

// let address = {
//     street: '143',
//     city: 'Indore',
//     zipCode: 452001
// }

// function showAddress(address) {
//     for (let key in address)
//     console.log(key, address[key])
// }

// showAddress(address);


//Factory & Constructor Function

// //  let address = createAddress('a', 'b', 'c');
// //     console.log(address);

// factory function

//  function CreateAddress(street, city, zipCode) {
//      return {
//          street: street, //street
//          city,
//          zipCode
//      };
//  }

// Constructor Function
// let address = new Address('a', 'b', 'c');
// console.log(address);



// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }



//Object Equality
// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');
// let address3 = address1;

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// //Constructor Function
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }


// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipCode === address2.zipCode;
// }


// function areSame(address1, address2) {
//     return address1 === address2;
// }



//Blog post object
// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         {author:'a', body: 'b'},
//         {author:'c', body: 'd'},
//     ],
//     isLive: true
// };

// console.log(post);



//Constructor Function Exercise
// let post = new Post('a', 'b', 'c');
// console.log(post);


// function Post(title, body, author, ) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }



//Price Range Object Exercise
// let priceRanges = [
//     {label: '$', tooltip: 'Inexpensive', minPerson: 0, maxPerPerson: 10},
//     {label: '$$', tooltip: 'Moderate', minPerson: 11, maxPerPerson: 20},
//     {label: '$$$', tooltip: 'Expensive', minPerson: 21, maxPerPerson: 50}
// ];

// let restaurants = [
//     {averagePerPerson: 5}
// ]


//Adding elements in a array
// const numbers = [3, 4];

// //End
// numbers.push(5,6);


// //Beginning
// numbers.unshift(1,2);


// //Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);



//Find Elements In an Array(Primitives)
// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));



//Find Elements In an Array(Reference Types)

// const courses = [
//     { id: 1, courseName: 'a'},
//     { id: 2, courseName: 'b'}
// ]

// console.log(courses.includes({id: 1, courseName: 'a' }));

// const course = courses.find(function(course) {
//     // return course.courseName === 'a';
//     return course.courseName === 'xyz';
// })  
// const course = courses.findIndex(function(course) {
//     return course.courseName === 'a';
//     // return course.courseName === 'xyz';
// })  

// console.log(course);



//Arrow Function 
// const courses = [
//     { id: 1, courseName: 'a'},
//     { id: 2, courseName: 'b'}
// ]

// const course = courses.find(course => course.courseName === 'a');


// console.log(course);



//Removing Elements in an Array 

// const numbers = [1, 2, 3, 4];


// //End
// // const last = numbers.pop();
// //console.log(last);

// //Beginning
// // const first = numbers.shift();
// // console.log(first);

// //Middle
// numbers.splice(2, 2);
// console.log(numbers);



//Emptying an array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

//  //Solution 1
//     // numbers = [];
    
//  //Solution 2
//     // numbers.length = 0;  //better solution

//  //Solution 3
//     // numbers.splice(0, numbers.length);

//  //Solution 4
// while (numbers.length > 0)
//     numbers.pop();

//     console.log(numbers);
//     console.log(another);



//Combining And Slicing Array
// const first = [{id: 1}];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;


// const slice = combined.slice();
// console.log(combined);
// console.log(slice);




//Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, 'a', ...second];

// // const copy = combined.slice();
// const copy = [...combined];





//Iterate an array
// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));



//Joining an array
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts= message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);



//Sorting an array 
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// const courses = [
//     { id:1, courseName:'Node.js'},
//     { id:2, courseName:'javascript'},
// ];

// courses.sort(function(a, b) {
//     const nameA = a.courseName.toUpperCase();
//     const nameB = a.courseName.toLowerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);


// Testing the elements of an Array
// const numbers = [1, -1, 2, 3];

// //every()
// //some()

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive);



//Filtering an Array 
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);



//Mapping an Array
// const numbers = [1, -1, 2, 3];

// const items = numbers
// .filter(n => n >= 0)
// .map(n => ({ value: n }) )
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);


// // const items = filtered.map(n => ({ value: n }) );
// // const html ='<ul>' + items.join('') + '</ul>';

// console.log(items);



//Reducing an Array
// const numbers = [1, -1, 2, 3];

// // a = 0, c = 1 =>  a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5

// //a = 1, c = -1 => a = 0
// //a = 0, c = 2 => a = 2
// //a = 2, c = 3 => a = 5
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );

// // let sum = 0;
// // for (let n of numbers)
// // sum += n;

// console.log(sum);




//Exercise-1 Array from Range
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min,max) {
//     const output = [];
//     for(let i = min; i <= max; i++)
//     output.push(i);
//     return output;
// }


//Exercise-2 Includes

// const numbers = [1, 2 , 3, 4];

// console.log(includes(numbers, -1));

// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//         return true;
//     return false; 
// }



//Exercise Except

// const numbers = [1, 2, 3, 4, 1 ,1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;
// }



//Exercise Moving an Element;

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 2);

// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;
//     if(position >= array.length || position < 0) { 
//          console.error('Invalid offset.');
//          return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output;
// }



//Exercise Count occurences
// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//     // let count = 0;
//     // for (let element of array)
//     //     if(element === searchElement)
//     //         count++;
//     // return count;


//     return array.reduce((accumulator, current) => {
//         const occurrences = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return accumulator + occurrences;
//     }, 0);
// }



//Exercise 6 Get max
// const numbers = [1, 2, 3 ,4];

// const max = getMax([1, 2, 2, 1, 3]);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;

//     // let max = array[0];

//     // for (let i = 1; i < array.length; i++)
//     //     if(array[i] > max)
//     //         max = array[i];     
//     // return max;

//     return array.reduce((a, b) => (a > b) ? a : b);
// }



//Exercise 7 Movies

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },

// ];


// //All the movies in 2018 with rating > 4
// //Sort them by their rating
// //Descending order
// //Pick their title

// const titles = movies
//  .filter(m => m.year === 2018 && m.rating > 4)
//  .sort((a, b) => a.rating - b.rating)
//  .reverse()
//  .map(m => m.title)

// console.log(titles);


//FUNCTIONS IN JS

//Function Declaration 
// function walk() {
//     console.log('walk');
// }

// //Named Function Expression
// // let run = function(walk) {
// //     console.log('run');
// // };

// //Anonymous Function Expression
// let run = function() {
//     console.log('run');
// };
// let move = run;
// run();
// move();  


//Arguments
// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;

//     console.log(arguments);
//     return a + b;
// }

// console.log(sum(1, 2 , 3, 4, 5));



//Rest Operator
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));



//Default parameter
// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, undefined, 5))




//Getters and Setters
const person = {
    firstName: 'Nishant',
    lastName: 'Jain',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};


console.log(person.fullName());








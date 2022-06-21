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

//constructor function
  function Circle(radius) {
     this.radius = radius;
     this.draw = function() {
         console.log('draw');
     }
 }

 const Circle1 = new Function('radius', `
 this.radius = radius;
 this.draw = function() {
     console.log('draw');
 }
 `);

 const circle = new Circle(1);

 const another = new Circle(1);
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

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for(let value of array)
    if(value)
    count++;
    return count;
} 

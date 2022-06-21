// //constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

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
//                     // {} --> specifies target of this

// Circle.apply({}, [1, 2, 3])  //apply is used for array

// const another = new Circle(1);
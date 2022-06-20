//Constructor Property

//factory function
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//constructor function
function Circle(radius) {
this.radius = radius;
this.draw = function() {
   console.log('draw');
}
}

const another = new Circle(1);



//circle.constructor 
//--{Built in javascript constructor}

let x = {};

//let x = new Object();

new String(); //'', "", ``
new Boolean(); //true,false
new Number(); //1,2,3
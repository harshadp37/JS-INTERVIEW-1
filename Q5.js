// QUESTION STATEMENT
/* Q5. How to call the function display() in the following code such that it logs the given object on the screen */

/* HOW IT WORKS */
// "bind()" method create new function where it's "this" keyword bind with provided value
function display(){
    console.log(this);
}

const obj = {
    a: 100,
    b: 2
};

display.bind(obj)();
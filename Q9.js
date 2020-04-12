// QUESTION STATEMENT
/* Q9. Why do we need let and const in JS. Compare it with the problems in ES5 */

// ANSWER
// "let" and "const" both declare block-scope variable where "let" declared variables can be re-assigned where "const" declared variables cannot be re-assigned & they have to initialize with a value while declaring.

// EXAMPLE

// We can skip initializing part in case of "let" where We can re-assign value.
let x;
let y = 10;
x = 5;
y = 15

console.log(x + " " + y);

// We cannot skip initializing part in case of "const" Also We cannot re-assign value.

// const i; will throw an Error
const i = 25;
const j = 100;
// i = 50; will throw an Error.

console.log(i + " " + j);
// QUESTION STATEMENT
/* Q1. Implement customMap() function for JS arrays. 
       The functionality should be exactly the same as that of JS native .map() function. 
       Function customMap() should return a new array and not change the array on which we are mapping */

// HOW IT WORKS
// 1. "Array.prototype" gives us access to use "customMap" function on an Array.
// 2. "this" keyword inside a "customMap" function points to an array on which we are calling "customMap" function 
// 3. construction of "newArray" based on the value which is return in callback. 

Array.prototype.customMap = function(cb){
    const currentArray = this;
    const newArray = [];
    for(let i=0; i<currentArray.length; i++){
        newArray.push(cb(currentArray[i], i));
    }
    return newArray;
}

// EXAMPLE

// INPUT ARRAY
const array = [1, 5, 7];

/* CALLING "cutomMap" on "array" and returning square of each value in an array And store it in "resultArray" */
const resultArray = array.customMap((value, index)=>{
    return value * value;
})

// INPUT ARRAY REMAINS SAME
console.log(array);

// RESULTANT ARRAY CONTAINS SQUARE OF EACH VALUE
console.log(resultArray);
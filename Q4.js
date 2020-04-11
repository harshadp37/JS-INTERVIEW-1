// QUESTION STATEMENT
/* Q4. Implement a function sum() in the following way such that it gives the sum of two numbers */

/* HOW IT WORKS */
// 1. returning function If 'a' Exists else throw Error.
// 2. returning 'a + b' If 'b' too Exists else throw Error.

function sum(a) {
    if(a){
        return (b) =>{
            if(b){
                return a + b;
            }else{
                throw new Error("Excepted Second Argument.");
            }
        }
    }else{
        throw new Error("Excepted First Argument.");
    }
    
}

/* EXAMPLE */
console.log(sum(2)(5))
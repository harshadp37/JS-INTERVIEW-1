// QUESTION STATEMENT
/* Q7. Give a relevant example of Promises */

// ANSWER
// Promises are asynchronous way of doing Task which will return either a Successful Response or Error Response. This Response is then catch with the callback. 

// EXAMPLE
var promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve();
    }, 5000);
})

// Promise will return after 5s.
promise.then(()=>{
    console.log("Promise is Completed.")
}).catch(()=>{
    console.log("Promise returns Error")
})

console.log("It will Execute before Promise Returns.")
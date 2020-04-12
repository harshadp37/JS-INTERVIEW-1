// QUESTION STATEMENT
/* Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples */

// ANSWER
// When a Functions returns Promise or Any statement inside a Function Returns Promise And we need to wait until Promise returns with response before executing further statements. In this case, We make use of "async/await". "async" before funtion states that this function or any statement inside it returns promise And We use "await" on that promise whose response we need before proceeding further.

// EXAMPLE
var checkAge = async function(age){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age > 18){
                resolve("Access granted!!");
            }else{
                resolve("No Access!!");
            }
        }, 5000);
    });

    let result = await promise;

    console.log(result);
}

checkAge(22);
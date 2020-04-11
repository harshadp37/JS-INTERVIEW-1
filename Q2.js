// QUESTION STATEMENT
/* Q2. Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments 
       and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property */


/* HOW IT WORKS */
// 1. "propertyExists takes two @params 'obj' & 'path'"
// 2. Split path by '.' And check value in obj.
// 3. If value exists then return that value or else return false

function propertyExists(obj, path) {
    // If Object pass is an Array or of other type then throw Error 
    if(Array.isArray(obj)){
        throw new Error("Excepted an Object but instead received an Array.");
    }
    if(obj && typeof obj === "object"){
        if(path != "" && typeof path === "string"){
            const splitArray = path.split('.');
            let result = obj[splitArray[0]];
            for(let i=1; i<splitArray.length; i++){
                result = result[splitArray[i]];
            }
            return result ? result : false;
        }else{
            throw new Error("Excepted path in the form of string.");
        }
    }else{
        throw new Error("Excepted an Object but instead received a " + typeof obj);
    }
}

/* EXAMPLE */
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 100,
        e: {
            f: 45
        }
    }
};

console.log(propertyExists(obj, "c.d"));
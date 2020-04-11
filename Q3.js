// QUESTION STATEMENT
/* Q3. Implement a function strContains(char) that I can use on any string and 
       it returns true/false if the character “char” is present on a string. */

/* HOW IT WORKS */
// 1. "String.prototype" gives us access to use "strContains" function only on a String.
// 2. iterate all over the String If character 'ch' exists then return true else return false.
String.prototype.strContains = function(ch){
    const s = this;
    for(let i=0; i<s.length; i++){
        if(s.charAt(i) === ch){
            return true;
        }
    }
    return false;
}

/* EXAMPLE */
const str = "I am a string";

console.log(str.strContains('a'))
// QUESTION STATEMENT
/* Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6 */

// ANSWER
// The "prototype" allows us to add properties and methods to object's constructors, Means Every Instance of an Object can have those newly added properties and methods.

// EXAMPLE

var Person = function(name, gender){
    this.name = name;
    this.gender = gender;
}

Person.prototype.language = "English";
Person.prototype.printDetails = function(){
    console.log(this.name + " " + this.gender + " " + this.language);
}

var person1 = new Person("Harshad", 22);
var person2 = new Person("Vaibhav", 30);

// Both person1 and person2 can have Property "language" as "English" And also printDetails is available.
person1.printDetails(); // Harshad 22 English
person2.printDetails(); // Vaibhav 30 English
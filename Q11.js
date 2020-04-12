// QUESTION STATEMENT
/* Q11. Implement Stack class in JS. */

//Stack Class
class Stack{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    //push Element to the Stack.
    push(data){
        this.array.push(data);
        this.size++;
    }

    //Remove Element from the Stack.
    pop(){
        if(this.size == 0){
            throw new Error("Cannot Removed Element from an Empty Stack.")
        }
        this.array.pop();
        this.size--;
    }

    //Print Stack Element
    print(){
        for(let i=0; i<this.array.length; i++){
            process.stdout.write(this.array[i] + " ");
        }
        console.log();
    }
}

// EXAMPLE
let s = new Stack();
s.push(5);
s.push(10);
console.log('SIZE : ' + s.size);
s.print();
s.push(20);
s.push(40);
console.log('SIZE : ' + s.size);
s.print();
s.pop();
console.log('SIZE : ' + s.size);
s.print();
s.push(50);
s.push(100);
console.log('SIZE : ' + s.size);
s.print();
s.pop();
console.log('SIZE : ' + s.size);
s.print();
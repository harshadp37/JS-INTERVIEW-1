// QUESTION STATEMENT
/* Q12. Implement Queue class in JS. */

//Queue Class
class Queue{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    //add Element to the Queue.
    add(data){
        this.array.push(data);
        this.size++;
    }

    //Remove Element from the Queue.
    poll(){
        if(this.size == 0){
            throw new Error("Cannot Removed Element from an Empty Queue.")
        }
        this.array.shift();
        this.size--;
    }

    //Print Queue Element
    print(){
        for(let i=0; i<this.array.length; i++){
            process.stdout.write(this.array[i] + " ");
        }
        console.log();
    }
}

// EXAMPLE
let q = new Queue();
q.add(5);
q.add(10);
console.log('SIZE : ' + q.size);
q.print();
q.add(20);
q.add(40);
console.log('SIZE : ' + q.size);
q.print();

q.poll();
console.log('SIZE : ' + q.size);
q.print();
q.add(50);
q.add(100);
console.log('SIZE : ' + q.size);
q.print();

q.poll();
console.log('SIZE : ' + q.size);
q.print();
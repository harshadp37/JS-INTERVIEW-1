// QUESTION STATEMENT
/* Q10. Implement LinkedList class in JS. */

//Linked List Node Class
class LinkedListNode{
    constructor(data){
        this.data = data;
    }
}

//Linked List Class
class LinkedList{
    constructor(){
        this.head = null;
        this.prev = null;
        this.size = 0;
    }

    //Add Element at the end of the Linked List.
    add(data){
        let newNode = new LinkedListNode(data);

        if(this.head == null){
            this.head = newNode;
            this.prev = newNode;
        }else{
            this.prev.next = newNode;
            this.prev = newNode;
        }
        this.size++;
    }

    //Remove Last Element from the Linked List.
    removeLast(){
        if(this.size == 0){
            throw new Error("Cannot Removed Element from Empty Linked List.")
        }
        if(this.size == 1){
            this.head = null;
        }else{
            let temp = this.head;
            let p = null;
            while(temp.next != null){
                p = temp;
                temp = temp.next;
            }
            p.next = null;
            this.prev = p;
        }
        this.size--;
    }

    //Print Linked List Element
    print(){
        let temp = this.head;
        while(temp != null){
            process.stdout.write(temp.data + " > ");
            temp = temp.next;
        }
        console.log(null);
    }
}

//EXAMPLE
let ll = new LinkedList();
ll.add(5);
ll.add(10);
console.log('SIZE : ' + ll.size);
ll.print();
ll.add(20);
ll.add(40);
console.log('SIZE : ' + ll.size);
ll.print();
ll.removeLast();
console.log('SIZE : ' + ll.size);
ll.print();
ll.add(50);
ll.add(100);
console.log('SIZE : ' + ll.size);
ll.print();
ll.removeLast();
console.log('SIZE : ' + ll.size);
ll.print();

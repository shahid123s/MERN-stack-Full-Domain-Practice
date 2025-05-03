// Overall this is a good implementation of a basic LinkedList class with Node structure
// A few potential improvements could be made:
// 1. The size property is not being incremented in the add method except for the first node
// 2. Could add error handling for edge cases
// 3. Could add additional helpful methods like remove(), find(), etc.
// 4. Could add type checking for the val parameter
// But the core functionality for creating, adding nodes and reversing the list is implemented correctly

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val) {
        if(this.size === 0) {
            this.head = new Node(val);
            this.size++;
            return ;
        }

        let curr = this.head ;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }

    reverseLinkedList () {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next; 
        }

        this.head = prev;
    }
}


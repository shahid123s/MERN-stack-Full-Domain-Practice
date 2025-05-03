class Stack {
    constructor() {
        this.stack = [];
    }

    pop(){
        if (this.isEmpty()) return ' Nothing to pop in the stack';
        return this.stack.pop();
    }

    isEmpty () {
        return this.stack.length  === 0
    }

    push(val) {
        this.stack.push(val);
    }

    peek() {
        if (this.isEmpty()) return ' Nothing to peek in the stack';
        return this.stack[this.stack.length - 1]   
    }
}
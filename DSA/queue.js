class Queue  {
    constructor() {
        this.queue = [];
    }

    enqueue (val) {
        this.queue.push(val)
    }

    dequeue(){
        if(this.isEmpty()) return 'Queue is underflow ';
        this.queue.shift();
    }

    peek() {
        if(this.isEmpty()) return 'Queue is empty';
        return this.queue[0]
    }

    isEmpty() {
       return this.queue.length === 0
    }
}
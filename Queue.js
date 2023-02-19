class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(elem) {
        this.elements.push(elem);
    }

    dequeue() {
        return this.elements.shift();
    }

    peek() {
        return this.elements[0];
    }
}
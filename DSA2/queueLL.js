// Define a Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define the Queue class
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;  
        this.size = 0;     
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            return null; 
        }
        this.front = this.front.next;
        this.size--;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    printQueue() {
        let currentNode = this.front;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.printQueue();

queue.dequeue()

console.log("Queue after dequeuing:");
queue.printQueue();

// console.log("Front element:", queue.peek());
// console.log("Is the queue empty?", queue.isEmpty());
// console.log("Size of the queue:", queue.getSize());

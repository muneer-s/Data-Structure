class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Function to get the index of the parent node
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Function to get the index of the left child node
    leftChild(index) {
        return 2 * index + 1;
    }

    // Function to get the index of the right child node
    rightChild(index) {
        return 2 * index + 2;
    }

    // Function to swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Function to insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Function to maintain heap property upwards
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    // Function to remove and return the maximum element from the heap
    extractMax() {
        

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    // Function to maintain heap property downwards
    heapifyDown(index) {
        let maxChildIndex;
        while (index < this.heap.length) {
            const leftChildIndex = this.leftChild(index);
            const rightChildIndex = this.rightChild(index);

            if ( this.heap[leftChildIndex] > this.heap[index]) {
                maxChildIndex = leftChildIndex;
            } else {
                maxChildIndex = index;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxChildIndex]) {
                maxChildIndex = rightChildIndex;
            }

            if (maxChildIndex === index) {
                break;
            }

            this.swap(index, maxChildIndex);
            index = maxChildIndex;
        }
    }

     // Function to delete an element from the heap by index
     delete(index) {
        

        const deletedValue = this.heap[index];
        this.heap[index] = this.heap.pop(); // Replace with last element

        // Adjust the heap to maintain the heap property
        this.heapifyDown(index);
        
        return deletedValue;
    }

    // Function to print the heap
    print() {
        console.log(this.heap);
    }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);
maxHeap.insert(5);
maxHeap.print(); // Output: [30, 20, 15, 10, 5]
console.log(maxHeap.extractMax()); // Output: 30
maxHeap.print(); // Output: [20, 10, 15, 5]

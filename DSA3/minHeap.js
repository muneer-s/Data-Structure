class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2*i + 1;
    }

    rightChild(i) {
        return 2*i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    extractMin() {
        const min = this.heap[0];
        return min;
    }

    remove(){
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
    }

    // Function to maintain heap property downwards
    heapifyDown(i) {
        let minI;
        while (i < this.heap.length) {
            const leftchildI = this.leftChild(i);
            const rightchildI = this.rightChild(i);

            if ( this.heap[leftchildI] < this.heap[i]) {
                minI = leftchildI;
            } else {
                minI = i;
            }

            if (this.heap[rightchildI] < this.heap[minI]) {
                minI = rightchildI;
            }

            if (minI === i) {
                break;
            }
            this.swap(i, minI);
            i = minI;
        }
    }

    print() {
        console.log(this.heap);
    }
}

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(15);
minHeap.insert(30);
minHeap.insert(5);
minHeap.print(); 
console.log(minHeap.extractMin());
minHeap.remove() 
minHeap.print(); 

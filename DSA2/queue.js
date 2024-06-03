class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element)
    }

    dequeue(element){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length == 0
    }

    front(){
        if(this.isEmpty()){
            return " No elements"
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    print(){
        let print = ""
        for(let i= 0;i<this.size();i++){
            print += this.queue[i] + ", "
        }console.log(print);
    }
}

const myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(96)
myQueue.enqueue(786)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()


console.log(myQueue.front());
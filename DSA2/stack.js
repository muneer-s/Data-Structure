// // reverse a string using stack
// let s = "hi muneer how are you"
// function reverseString(s) {
//     let split = s.split(" ")
//     let stack = [];
//     for (let i of s) {
//         stack.push(i);
//     }
//     let result = "";
//     while (stack.length) {
//         let current = stack.pop()
//         result = result + "" + current
//     } 
//     return result.trim()
// }
// console.log(reverseString(s)); 





//stack 
class Stack{
    constructor(){
        this.stack = []
    }
    
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.size()-1]
    }
    isEmpty(){
            return this.size() == 0
    }
    size(){
        return this.stack.length
    }

    print(){
         let stk = []
         for(let i=0;i<this.stack.length;i++){
            stk.push(this.stack[i])
         }
         return stk
    }
}

const stack = new Stack()
stack.push(10)
stack.push(200)
stack.push(1000)
console.log(stack.print());

stack.pop()
// stack.pop()
console.log(stack.print());

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
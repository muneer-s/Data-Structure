class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // insert at specific index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index");
    }

    if (index === 0) {
      this.prepend(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let count = 0;
      let prev = null;

      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      prev.next = newNode;
      this.size++;
    }
  }

  // delete at specific index
  deleteAt(index) {
    if (index < 0 || index >= this.size || !this.head) {
      return console.log("Invalid index");
    }

    let current = this.head;
    let count = 0;
    let prev = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }

      prev.next = current.next;
    }
    this.size--;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(10);
singlyLinkedList.append(20);
singlyLinkedList.prepend(5);
singlyLinkedList.insertAt(15, 2);
singlyLinkedList.print();
singlyLinkedList.deleteAt(2);
console.log("after deletion");
singlyLinkedList.print();

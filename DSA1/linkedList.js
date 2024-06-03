class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result);
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insert(data, index) {
    const node = new Node(data);
    if (index < 0) {
      console.log("invalid index");
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = node;
      node.next = current.next;
    }
    this.size++;
  }

  deleteFirst() {
    if (!this.head) {
      console.log("List is empty, nothing to delete.");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteLast() {
    if (!this.head) {
      console.log("nothing here");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.size--;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  removebyindex(index) {
    if (index < 0) {
      console.log("invalid index");
      return;
    }
    let removednode;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removednode = prev.next;
      prev.next = removednode.next;
    }
    this.size--;
  }

  removeValue(data) {
    if (!this.head) {
      return null;
    }
    let removednode;
    if (this.head.data == data) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.data !== data) {
        prev = prev.next;
      }
      if (prev.next) {
        removednode = prev.next;
        prev.next = removednode.next;
        this.size--;
      }
    }
  }
}

let list = new LinkedList();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(10);
list.append(20);
list.insert(100, 2);
list.insert(-1, 0);
list.deleteFirst();

list.deleteLast();
list.print();
list.reverse();
list.print();
list.removebyindex(2);
list.print();
list.removeValue(1);
list.print();

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node
  search(root, data) {

    if (root.data == data) {
      return true;
    } else if (data < root.data) {
      return this.search(root.left, data);
    } else {
      return this.search(root.right, data);
    }
  }

  //count no of nodes
  count(root){
    if(!root){
      return 0
    }
    return this.count(root.left) + this.count(root.right)+1
  }

  height(root){
    if(!root){
      return 0
    }
    return Math.max(this.height(root.left) ,this.height(root.right))+1
  }

  // Remove a node
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(root, data) {
    if (data < root.data) {
      root.left = this.removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
    } else {

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.data = this.Min(root.right);
      this.removeNode(root.right, root.data);
    }
    return root;
  }

  // Find the minimum node in a tree
  Min(root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.Min(root.left);
    }
  }
  Max(root) {
    if (!root.right) {
      return root.data;
    } else {
      return this.Max(root.right);
    }
  }

  // In-order traversal
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }

  // Pre-order traversal
  preorder(root) {
    if (root) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  // Post-order traversal
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
  }

  bfs() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

const bst = new BinarySearchTree();

// Inserting nodes
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);
console.log(bst.search(bst.root, 5));
// Removing a node
// Traversals after deletion
console.log("In-order traversal:");
bst.inorder(bst.root);

bst.remove(25);
// bst.remove(22);
// bst.remove(15);

console.log("Pre-order traversal:");
bst.preorder(bst.root);

console.log("Post-order traversal:");
bst.postorder(bst.root);

console.log("bfs traversal: ");
bst.bfs();
console.log("minimum element :", bst.Min(bst.root));
console.log("maximum element :", bst.Max(bst.root));
console.log("count : ",bst.count(bst.root));
console.log("max height : ",bst.height(bst.root));


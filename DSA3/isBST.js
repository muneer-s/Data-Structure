class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isBST(node, min = null, max = null) {
  if (!node) {
    return true;
  }
  if ((min && node.value <= min) || (max && node.value >= max)) {
    return false;
  }

  return (
    isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
  );
}
// Example usage:

// Construct a BST
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(25);

console.log(isBST(root)); // true

// Construct a non-BST
let root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(20);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(12); // This makes it not a BST
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(25);

console.log(isBST(root2)); // false

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findClosestValueInBST(tree, target) {
    let closest = tree.value;
    let currentNode = tree;
    
    while (currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    
    return closest;
}


let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(22);
root.left.left.left = new TreeNode(1);

// Find the closest value to 12
let target = 12;
let closestValue = findClosestValueInBST(root, target);
console.log("Closest value   is " + closestValue);

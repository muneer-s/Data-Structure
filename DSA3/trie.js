class Node {
    constructor() {
        this.child = {}; 
        this.EOW = false; 
    }
}

class Trie {
    constructor() {
        this.root = new Node(); 
    }
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.child[char]) {
                node.child[char] = new Node();
            }
            node = node.child[char];
        }
        node.EOW = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.child[char]) {
                return false;
            }
            node = node.child[char];
        }
        return node.EOW;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.child[char]) {
                return false;
            }
            node = node.child[char];
        }
        return true;
    }

    delete(word) {
        function deleteNode(node, word, depth){
            if (depth === word.length) {
                if (!node.EOW) {
                    return false; 
                }
                node.EOW = false; 
                return Object.keys(node.child).length === 0;
            }

            const char = word[depth];

            if (!node.child[char]) {
                return false; 
            }

            const shouldDeleteChild = deleteNode(node.child[char], word, depth + 1);

            if (shouldDeleteChild) {
                delete node.child[char]; 
                return Object.keys(node.child).length === 0 && !node.EOW; 
            }

            return false;
        };

        deleteNode(this.root, word, 0);
    }

 


}

let trie = new Trie();
trie.insert("apple");
trie.insert("muneer")
console.log("search apple : ",trie.search("apple")); 
console.log("search app : ",trie.search("app")); 
console.log("startwith app : ",trie.startsWith("app")); 
trie.insert("app");
console.log("search app : ",trie.search("app")); 

// trie.delete("apple");
console.log("search apple : ",trie.search("apple")); // false
console.log("search app : ",trie.search("app")); // true


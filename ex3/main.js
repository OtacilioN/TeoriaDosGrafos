const LinkedBinaryTree = require("./LinkedBinaryTree");

const tree = new LinkedBinaryTree();
const root = tree.addRoot(1); // "Im the root"
const nl = tree.insertLeft(root, 2); // "I suppose to be at root -> left"
tree.insertRight(root, 3); // "I suppose to be at root -> right"
const nll = tree.insertLeft(nl, 4); // "I suppose to be at root -> left -> left"
tree.insertRight(nl, 5); // "I suppose to be at root -> left -> right"
const nllr = tree.insertRight(nll, 6); // "I suppose to be at root -> left -> left -> right"
console.log("List of nodes:", tree.children(tree.getRoot()));
console.log("The tree size:", tree.getSize());
console.log("Pre order:", tree.toStringPreOrder());
console.log("Pos order:", tree.toStringPosOrder());
console.log('Node "6" depth:', tree.depth(nllr));

const LinkedBinaryTree = require("./LinkedBinaryTree");

const tree = new LinkedBinaryTree();
const root = tree.addRoot("Im the root");
const nl = tree.insertLeft(root, "I suppose to be at root -> left");
tree.insertRight(root, "I suppose to be at root -> right");
const nll = tree.insertLeft(nl, "I suppose to be at root -> left -> left");
tree.insertRight(nl, "I suppose to be at root -> left -> right");
tree.insertRight(nll, "I suppose to be at root -> left -> left -> right");
console.log(tree.children(tree.getRoot()));
console.log(tree.getSize());

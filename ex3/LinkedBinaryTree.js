const Node = require("./Node");
class LinkedBinaryTree {
  constructor(root, size) {
    this.root = root;
    // I dont agree with size as attribute, but the question asks for
    this.size = size;
  }

  // Question asks for getters and setters for each attibute
  getSize() {
    return this.size;
  }
  getRoot() {
    return this.root;
  }
  setRoot(root) {
    this.root = root;
  }
  setSize(size) {
    this.size = size;
  }

  isEmpty() {
    if (this.root) {
      return false;
    } else {
      this.size = 0;
      return true;
    }
  }

  isInternal(node) {
    return node.isInternal();
  }
  isExternal(node) {
    return !this.isInternal(node);
  }
  isRoot(node) {
    return node === this.root;
  }
  hasLeft(node) {
    return node.hasLeft();
  }
  hasRight(node) {
    return node.hasRight();
  }
  left(node) {
    return node.getLeftSon();
  }
  right(node) {
    return node.getRightSon();
  }
  parent(node) {
    return node.getFather();
  }
  children(node) {
    if (!node) {
      return [];
    }
    if (this.isExternal(node)) {
      return node;
    }
    return [node]
      .concat(this.children(node.getLeftSon()))
      .concat(this.children(node.getRightSon()));
  }
  addRoot(element) {
    const root = new Node(element, null, null, null);
    this.root = root;
    this.size = 1;
    return root;
  }
  insertLeft(node, element) {
    const leftNode = new Node(element, node, null, null);
    if (!this.hasLeft(node)) {
      this.size++;
    }
    node.setLeftSon(leftNode);
    return leftNode;
  }
  insertRight(node, element) {
    const rightNode = new Node(element, node, null, null);
    if (!this.hasRight(node)) {
      this.size++;
    }
    node.setRightSon(rightNode);
    return rightNode;
  }
}
module.exports = LinkedBinaryTree;

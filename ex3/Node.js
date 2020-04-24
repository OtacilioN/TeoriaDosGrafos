class Node {
  constructor(element, father, leftSon, rightSon) {
    this.element = element;
    this.father = father;
    this.leftSon = leftSon;
    this.rightSon = rightSon;
  }

  getElement() {
    return this.element;
  }
  setElement(element) {
    this.element = element;
  }

  getFather() {
    return this.father;
  }
  setFather(father) {
    this.father = father;
  }

  getLeftSon() {
    return this.leftSon;
  }
  setLeftSon(leftSon) {
    this.leftSon = leftSon;
  }

  getRightSon() {
    return this.rightSon;
  }
  setRightSon(rightSon) {
    this.rightSon = rightSon;
  }
  hasLeft() {
    return !!this.getLeftSon();
  }
  hasRight() {
    return !!this.getRightSon();
  }
  isInternal() {
    return this.hasLeft() || this.hasRight();
  }
}
module.exports = Node;

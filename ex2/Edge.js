class Edge {
  constructor(label, oppositeVertex) {
    this.label = label;
    this.oppositeVertex = oppositeVertex;
  }

  getLabel() {
    return this.label;
  }

  getOppositeVertex() {
    return this.oppositeVertex;
  }
}

module.exports = Edge;

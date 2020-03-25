class Vertex {
  constructor(label, edges) {
    this.label = label;
    this.edges = edges || [];
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  getLabel() {
    return this.label;
  }

  replace(label, edges) {
    this.label = label;
    this.edges = edges;
  }

  getEdges() {
    return this.edges;
  }
}

module.exports = Vertex;

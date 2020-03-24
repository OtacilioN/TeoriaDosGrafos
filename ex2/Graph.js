class Graph {
  constructor(vertices) {
    this.vertices = vertices || [];
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  getVertices() {
    return this.vertices;
  }

  _findVertex(v) {
    const vLabel = v.getLabel();
    const vertex = this.vertices.filter(i => i.getLabel() === vLabel);
    if (vertex.length) {
      return vertex[0];
    } else {
      return null;
    }
  }

  incidentEdges(v) {
    const vertex = this._findVertex(v);
    return vertex && vertex.getEdges();
  }

  _findEdge(v, e) {
    const eLabel = e.getLabel();
    const incidentEdges = this.incidentEdges(v);
    const edge = incidentEdges.filter(i => i.getLabel() === eLabel);
    if (edge.length) {
      return edge[0];
    } else {
      return null;
    }
  }

  opposite(v, e) {
    const edge = this._findEdge(v, e);
    if (edge) {
      return edge.getOppositeVertex();
    } else {
      // throw `${e} is not incident in ${v}`;
      console.log("ERROR: ", `${e} is not incident in ${v}`);
    }
  }

  areAdajacent(v, w) {
    const wLabel = w.getLabel();
    const incidentEdges = this.incidentEdges(v);
    const oppositeEdge = incidentEdges.filter(
      i => i.getOppositeVertex().getLabel() === wLabel
    );
    return !!oppositeEdge.length;
  }
}

module.exports = Graph;

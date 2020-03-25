class Graph {
  constructor(vertices) {
    this.vertices = vertices || [];
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  // renamed vertices to getVertices to avoid anti pattern naming
  getVertices() {
    return this.vertices;
  }

  // renamed edges to getEdges to avoid anti pattern naming
  getEdges() {
    const edgeArr = [];
    this.getVertices().forEach(v => {
      const incidentEdges = this.incidentEdges(v);
      incidentEdges.forEach(e => {
        const edgeObj = {};
        edgeObj[e.getLabel()] = {
          toString: `${v.getLabel()}--${e.getLabel()}--${e
            .getOppositeVertex()
            .getLabel()}`,
          edge: e
        };
        edgeArr.push(edgeObj);
      });
    });
    return edgeArr;
  }

  incidentEdges(v) {
    return v && v.getEdges();
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

  replace(v, x) {
    const vCopy = Object.assign({}, v);
    xIncidents = this.incidentEdges(v);
  }
}

module.exports = Graph;

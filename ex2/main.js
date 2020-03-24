const Graph = require("./Graph");
const Vertex = require("./Vertex");
const Edge = require("./Edge");

// Graph1
{
  console.log("Graph1");
  const graph1 = new Graph();
  const vertexA = new Vertex("A");
  graph1.addVertex(vertexA);
  console.log(
    "graph1.incidentEdges(vertexA) :\n",
    graph1.incidentEdges(vertexA)
  );
}

// Graph2
{
  console.log("Graph2");
  const graph2 = new Graph();
  const vertexA = new Vertex("A");
  const vertexB = new Vertex("B");
  const edgeA = new Edge("a", vertexB);
  const edgeB = new Edge("b", vertexA);
  vertexA.addEdge(edgeA);
  vertexB.addEdge(edgeB);
  graph2.addVertex(vertexA);
  graph2.addVertex(vertexB);
  console.log(
    "graph2.incidentEdges(vertexA) :\n",
    graph2.incidentEdges(vertexA)
  );
  console.log(
    "graph2.incidentEdges(vertexB) :\n",
    graph2.incidentEdges(vertexB)
  );
  console.log(
    "graph2.opposite(vertexA, edgeA)\n",
    graph2.opposite(vertexA, edgeA)
  );
  console.log(
    "graph2.opposite(vertexB, edgeB)\n",
    graph2.opposite(vertexB, edgeB)
  );
  console.log(
    "graph2.areAdajacent(vertexA, vertexB)",
    graph2.areAdajacent(vertexA, vertexB)
  );
}

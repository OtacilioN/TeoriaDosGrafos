const Node = require('./node');
const Graph = require('./graph');

const nodeA = new Node("A", ["B", "C"]);
const nodeB = new Node("B", ["A", "D"]);
const nodeC = new Node("C", ["A", "D"]);
const nodeD = new Node("D", ["B", "C"]);

const graph = new Graph([nodeA, nodeB, nodeC, nodeD]);

const nodeList = graph.getNodes();
nodeList.map(node => console.log(node.getLabel(), node.getEdges()));
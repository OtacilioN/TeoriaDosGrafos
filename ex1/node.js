class Node{
    constructor(label, edges){
        this.label = label;
        this.edges = edges;
    }
    getLabel(){
        return this.label;
    }
    getEdges(){
        return this.edges;
    }
}

module.exports = Node; 

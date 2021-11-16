function Tree() {
    this.root = null;
}
//traverse the tree and visit each node
Tree.prototype.traverse = function() {
    
    this.root.visit(this.root);
    
}
//search the tree for a specific value
Tree.prototype.search = function(value) {
    var found = this.root.search(value);
    return found;
}
//add new node with value
Tree.prototype.addValue = function(value) {
    var n = new Node(value)
    //if there isn't already a node 
    if (this.root == null) {
        //create a new node and set its x/y coordinates 
        this.root = n;
        this.root.x = width / 2;
        this.root.y = height / 16;
    }
    else {
        this.root.addNode(n)
    }
  
}
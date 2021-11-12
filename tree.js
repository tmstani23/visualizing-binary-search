function Tree() {
    this.root = null;
}
//traverse the tree and visit each node
Tree.prototype.traverse = function() {
    this.root.visit();
}
//search the tree for a specific value
Tree.prototype.search = function(value) {
    var found = this.root.search(value);
    return found;
}
//add new node with value
Tree.prototype.addValue = function(value) {
    var n = new Node(value)
    if (this.root == null) {
        this.root = n;
    }
    else {
        this.root.addNode(n)
    }
  
}
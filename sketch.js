//global tree variable
var Tree;
var Node;

function setup() {
    noCanvas();
    tree = new Tree();
    
    tree.addValue(5);

    console.log(tree);
    tree.addValue(5);
}

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function(value) {
    var n = new Node(value)
    if (this.root == null) {
        this.root = n;
    }
    else {
        this.root.addNode(n)
    }
  
}

Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        
        if (this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }

    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
        
    }
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null
}
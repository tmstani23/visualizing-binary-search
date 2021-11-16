//create node object with a value and left/right property
function Node(value, x, y) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}
//search the node and return values recursively if the input value matches the searched for value return that node
Node.prototype.search = function (inputVal) {
    if (this.value == inputVal) {
        return this;
        
    } else if (inputVal < this.value && this.left != null) {
            return this.left.search(inputVal)
        
    } else if (inputVal > this.value && this.right != null) {
            return this.right.search(inputVal)
    }
    return null;
}

//vist each sub node to the left and right if not null
Node.prototype.visit = function (parent) {
    
    if (this.left != null) {
        
        this.left.visit(this); 
    }
    //log the value of each sub node
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    stroke(255);
    noFill();
    ellipse(this.x, this.y - 5, 20, 20)
    
    
    line(parent.x, parent.y, this.x, this.y)
    
    if (this.right != null) {
        
        this.right.visit(this);
    }
    
}

//add a new left/right subnode if the value is less than the parent node value
Node.prototype.addNode = function(n) {
    
    if (n.value < this.value) {
        
        if (this.left == null) {
            
            this.left = n;
            this.left.x = this.x - 50;
            this.left.y = this.y + 20;
        } else {
            
            this.left.addNode(n);
        }

    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 50;
            this.right.y = this.y + 20;
        } else {
            this.right.addNode(n);
        }
        
    }
    
}


//create node object with a value and left/right property
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null
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
Node.prototype.visit = function () {
    
    if (this.left != null) {
        this.left.visit(); 
    }
    //log the value of each sub node
    console.log(this.value);

    if (this.right != null) {
        this.right.visit();
    }
    
}

//add a new left/right subnode if the value is less than the parent node value
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


//global tree variable
var tree;


function setup() {
    noCanvas();
    
    //create new tree object to hold the nodes
    tree = new Tree();

    //loop through each node in the tree and add a random value
    for (var i = 0; i < 20; i++) {
        tree.addValue(floor(random(0, 100)));
    }

    console.log(tree);
    tree.traverse();

    var result = tree.search(7);
    if(result == null) {
        console.log("Not found");
    } else {
        console.log(result)
    }
    
}




//global tree variable
var tree;


function setup() {
    createCanvas(600,400);
    background(51);
    noFill();
    //create new tree object to hold the nodes
    tree = new Tree();
    tree.levels = 0;

    //loop through each node in the tree and add a random value
    for (var i = 0; i < 10; i++) {
        tree.addValue(floor(random(0, 100)));
    }

    console.log(tree);
    tree.traverse();
    //search for a value in the tree and report found if so
    var result = tree.search(7);
    if(result == null) {
        console.log("Not found");
    } else {
        console.log(result)
    }
    
}




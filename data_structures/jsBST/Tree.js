function Node (val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}

BST.prototype.insert = function(val){
  const node = new Node(val);

  // if the tree is empty, add node to root
  if(this.root === null) {
    this.root = node;
    return;
  }

  // otherwise, we need to to the right spot
  this.insertNode(this.root, node);
};

BST.prototype.insertNode = function(node, newNode){
  if(newNode.val < node.val){ // check the left side of the tree first
    if(node.left === null){
      node.left = newNode;
    }else{
      return this.insertNode(node.left, newNode);
    }
  }else{
    if(node.right === null){
      node.right = newNode;
    }else{
      return this.insertNode(node.right, newNode);
    }
  }
};

BST.prototype.remove = function(val){
  this.root = this.removeNode(this.root, val);
  return val;
};

BST.prototype.removeNode = function(node, val){
  if(node === null) return null;

  if(val < node.val){ // check left side
    node.left = this.removeNode(node.left, val);
    return node;
  }else if(val > node.val){ // check right side
    node.right = this.removeNode(node.right, val);
    return node;
  }else{ // that means we found the target node to delete
    // if there is no children at the target node, we can safely remove it
    if(node.left === null && node.right === null){
      return null;
    }

    // if left node is not present, replace target with right
    if(node.left === null){
      return node.right;
    }

    // if right node is not present, replace target with left
    if(node.right === null){
      return node.left;
    }

    // if target has both children
    const min = this.findMinNode(node.right);
    node.val = min.val;

    node.right = this.removeNode(node.right, min.val);
    return node;
  }
};

// find the smallest child to grandchild
BST.prototype.findMinNode = function(node){
  // if there is no left node, we have found the smallest
  if(node.left === null) return node;

  // otherwise, keep searching to the left of the tree
  return this.findMinNode(node.left);
};

BST.prototype.toArray = function(){
  let array = [];
  function traverse(root){
    if(!root) return null;
    array.push(root.val);

    if(root.left) traverse(root.left);
    if(root.right) traverse(root.right);
  }

  traverse(this.root);

  return array;
};

// BST.prototype.bfs = function(root){

// }

let tree = new BST();
tree.insert(10);
tree.insert(9);
tree.insert(7);
tree.insert(8);
tree.insert(3);

// tree.remove(3);
// tree.remove(1);
// tree.remove(4);

console.log(tree);
console.log(tree.toArray());
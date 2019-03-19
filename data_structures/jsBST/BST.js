/**
 * BST is a binary tree but with a few conditions:

All the keys (data inside the node) are distinct.
In every parent node, the left child key value is smaller than the parent node key value.
In every parent node, the right child key value is larger than the parent node key value.
 */

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}

BST.prototype.insert = function(val){
  const node = new Node(val);
  if(!this.root){
    this.root = node;
    return;
  }

  let current = this.root;
  while(current){
    if(val > current.val){ // search to the right if val is larger than current
      if(!current.right){
        current.right = node;
        break;
      }
      current = current.right;
    }else if(val < current.val){ // search to the left if val is smaller than current
      if(!current.left){ // if left is empty, we can safely insert it to the left
        current.left = node;
        break;
      }

      current = current.left; // continue to search downwards for a spot to insert
    }else{ // if current node is the same as the incoming node, don't do anything
      break;
    }
  }
};

BST.prototype.contain = function(val){
  let current = this.root;

  while(current){
    if(current.val === val){
      return true;
    }else if(val < current.val){
      current = current.left;
    }else if(val > current.val){
      current = current.right;
    }
  }

  return false;
};

// BST.prototype.remove = function(val){
//   const removeNode = (root) => {
//     if(!root) return null;

//     if(root.val === val){ // if we found the right node, replace it with the right node
//       // if are we at a leaf or root that doesn't have children
//       if(!root.left && !root.right) return null; 
      
//       // if one of the children is abcent then update current with one of the children
//       if(!root.left) return root.right;
//       if(!root.right) return root.left;

//       // if the target node has both children then we need to decide which one should go up
//       if()
//     } 
//   };
// };

const root = new BST();
[-10, -3, 0, 5, 9].forEach(n => {
  root.insert(n);
});

console.log(root);
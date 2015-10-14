/*
*   a tree is nonlinear data structure
*   trees are used to stroe hierarchical data(such as filesystem)
*   you can search a binary tree very quickly
*
*                    ____
*      ROOT ------> |____|
*                     /\
*                    /  \
*                   __  __
*    CHILD ------> |__||__|
*                   /
*                  /  
*                 __
*                |__|
*        
*   INSERT
*   if value of new node is greater than its parent node,add it right branch else add it left brancsh
*
*

**/                 

var Node = require('./node.js');

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}

function insert(data) {
  var node = new Node(data,null,null);
  if (this.root == null){
    this.root = node;
  } else {
    var curr = this.root;
    
    while (true){
      if (curr.data > node.data){
        if(curr.left == null){
          curr.left = node;
          break;
        }else{
          curr = curr.left;
          continue;
        }
      }else {
        if(curr.right == null){
          curr.right = node;
          break;
        } else{
          curr = curr.right;
          continue;
        }
      }
    }
  }
  console.log("inserted ",data);
}

function getMin(){
  var curr = this.root;
  var min = curr.data;

  while(!(curr == null)){
    min = curr.data;
    curr = curr.left;
  }

  return min;
}

function getMax(){
  var curr = this.root;
  var max;
  while(!(curr == null)){
    max = curr.data;
    curr = curr.right;
  }

  return max;
}

function find(item){
  var curr = this.root;
  var parent;
  while (curr.data != item){
    parent = curr;
    if (curr.data > item){
      curr = curr.left;
    } else{
      curr = curr.right;
    }
    if (curr == null){
      return null;
    }
  }
  return {parent : parent, current: curr};
}

/*
*
*
*
*
**/
function remove(item){
  var curr = this.root;
  var willDelete = this.find(item);

  if(willDelete.current.left == null && willDelete.current.right == null){
    if(willDelete.parent.left.data == item){
      willDelete.parent.left = null;
    } else{
      willDelete.parent.right = null;
    }
  } else{
    
  }
}

function inOrder(node){
  if(!(node == null)){
    inOrder(node.left);
    process.stdout.write(node.get() + " ");
    inOrder(node.right);
  }
}

function preOrder(node){
  if(!(node == null)){
    process.stdout.write(node.get() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node){
  if(!(node == null)){
    postOrder(node.left);
    postOrder(node.right);
    process.stdout.write(node.get() + " ");
  }
}

var bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.inOrder(bst.root);
process.stdout.write("\n");

bst.preOrder(bst.root);
process.stdout.write("\n");

bst.postOrder(bst.root);
process.stdout.write("\n");

console.log("min ",bst.getMin());
console.log("max ",bst.getMax());

console.log("find", bst.find(37).parent);

bst.remove(37);
bst.inOrder(bst.root);
process.stdout.write("\n");


module.exports = BST;
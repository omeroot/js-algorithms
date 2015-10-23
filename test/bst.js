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

function BST() {
  this.baseNode = {
    data: null,
    right: null,
    left: null
  };
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data, callback) {
  var node = JSON.parse(JSON.stringify(this.baseNode));
  node.data = data;
  if (this.root == null) {
    this.root = node;
  } else {
    var curr = this.root;

    while (true) {
      if (callback(curr.data, node.data)) {
        if (curr.left == null) {
          curr.left = node;
          break;
        } else {
          curr = curr.left;
          continue;
        }
      } else {
        if (curr.right == null) {
          curr.right = node;
          break;
        } else {
          curr = curr.right;
          continue;
        }
      }
    }
  }
  console.log("inserted ", data);
}

function getMin() {
  var curr = this.root;
  var min = curr.data;

  while (!(curr == null)) {
    min = curr.data;
    curr = curr.left;
  }

  return min;
}

function getMax() {
  var curr = this.root;
  var max;
  while (!(curr == null)) {
    max = curr.data;
    curr = curr.right;
  }

  return max;
}

function find(item, callback) {
  var curr = this.root;
  var parent;
  while (callback(curr.data) != item) {
    parent = curr;
    if (callback(curr.data) > item) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
    if (curr == null) {
      return null;
    }
  }
  return {parent: parent, current: curr};
}

/*
 *
 *  getSmallest is greatest node on right side of it will delete node
 *
 **/
function remove(callback) {
  var root = this.removeNode(this.root, callback);
}

function removeNode(node, callback) {
  if (node == null) {
    return null;
  }
  if (node.data == data) {
    if (node.left == null && node.right == null) {
      return null;
    }

    //node has no left child
    if (node.left == null) {
      return node.right;
    }

    //node has no right child
    if (node.right == null) {
      return node.left;
    }

    //node has two child
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);

    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);

    return node;
  } else if (data > node.data) {
    removeNode(node.right, data);

    return node;
  }

  function getSmallest(n) {
    if (n.left == null) {
      return n;
    } else {
      getSmallest(n.left);
    }
  }

}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    process.stdout.write(node.get() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    process.stdout.write(node.get() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    process.stdout.write(node.get() + " ");
  }
}

var bst = new BST();

bst.insert({x: 4}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 44}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 5}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 23}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 1}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 2}, function (a, b) {
  return a.x > b.x;
});
bst.insert({x: 32}, function (a, b) {
  return a.x > b.x;
});

bst.inOrder(bst.root);
process.stdout.write("\n");

bst.preOrder(bst.root);
process.stdout.write("\n");

bst.postOrder(bst.root);
process.stdout.write("\n");

console.log("min ", bst.getMin(function(){

}));
console.log("max ", bst.getMax());

console.log("find", bst.find(23, function (a) {
  return a.x;
}));

bst.remove(function(a){
  return a.x == 23;
});
bst.inOrder(bst.root);
process.stdout.write("\n");


module.exports = BST;

function Node(data, left, right){
  this.data = data;
  this.right = right;
  this.left = left;
  this.get = get;
}

function get(){
  return this.data;
}

module.exports = Node;
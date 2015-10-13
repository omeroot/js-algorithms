var Node = require('./node.js');

function DLinkedList(){
  this.head = new Node("head");
  this.current = this.head;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.find = find;
};

function insert(item){
  var newNode = new Node();
  newNode.element = item;
  this.current.next = newNode;
  newNode.next = null;
  newNode.prev = this.current;
  this.current = newNode;
};

function find(item){
  var curr = this.head;
  while(curr.next != null){
    curr = curr.next;
  }
  return curr;
};

function remove(item){
  var willDelete = this.find(item);
  console.log("willDelete",willDelete);
  willDelete.prev.next = willDelete.next;
  if(willDelete.next != null){
    willDelete.next.prev = willDelete.prev  
  }
};

function display(){
  var curr = this.head.next;
  while(curr != null){
    console.log(curr.element);
    curr = curr.next;
  }
}

var list = new DLinkedList();

list.insert("omer");
list.insert("eray");
list.insert("pamir");
list.insert("eyup");
list.remove("pamir");

list.display();

module.exports = DLinkedList;
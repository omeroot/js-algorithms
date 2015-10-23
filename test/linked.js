var Node = require('./node.js');

function LinkedList() {
  this.baseNode = {
    element: null,
    next: null
  };
  this.head = new Node("head");
  this.current = this.head;
  this.insert = insert;
  this.remove = remove;
  this.find = find;
  this.display = display;
}

function insert(newElement) {
  var newNode = JSON.parse(JSON.stringify(newElement));
  this.current.next = newNode;
  newNode.next = null;
  this.current = newNode;
};

function find(callback) {
  var currNode = this.head.next;
  while (callback(currNode.element)) {
    currNode = currNode.next;
  }
  return currNode;
};

function display() {
  var currNode = this.head;
  do {
    console.log(currNode.next.element);
    currNode = currNode.next;
  } while (currNode.next != null);
};

function remove(callback) {
  var currNode = this.head.next;
  var prev = currNode;

  while (!callback(currNode.element)) {
    prev = currNode;
    currNode = currNode.next;
  }
  prev.next = currNode.next;

  return currNode;
};

var llist = new LinkedList();
llist.insert({name: "omer"});
llist.insert({name: "eray"});
llist.insert({name: "pamir"});
llist.insert({name: "eyup"});

llist.display();

var result = llist.find(function(a){
  return a.name == "omer";
});

var remove = llist.remove(function(a){
  return a.name == "pamir";
});

console.log("result:",result);
console.log("removed:",remove);

llist.display();

module.exports = LinkedList;

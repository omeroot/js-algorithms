
function DLinkedList(){
  this.baseNode = {
    element:null,
    next: null,
    prev: null
  };
  this.head = new Node("head");
  this.current = this.head;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.find = find;
};

function insert(item){
  var newNode = JSON.parse(JSON.stringify(this.baseNode));
  newNode.element = item;
  this.current.next = newNode;
  newNode.next = null;
  newNode.prev = this.current;
  this.current = newNode;
};

function find(callback){
  var curr = this.head.next;
  while(!callback(curr.element)){
    curr = curr.next;
  }
  return curr;
};

function remove(callback){
  var willDelete = this.find(callback);
  console.log("willDelete",willDelete);
  willDelete.prev.next = willDelete.next;
  if(willDelete.next != null){
    willDelete.next.prev = willDelete.prev  
  }
  return willDelete;
};

function display(){
  var curr = this.head.next;
  while(curr != null){
    console.log(curr.element);
    curr = curr.next;
  }
}

var list = new DLinkedList();

list.insert({name:"omer",surname:"demircan"});
list.insert({name:"eray",surname:"arslan"});
list.insert({name:"pamir",surname:"çevik"});

var result = list.find(function(a){
  return a.name == "omer";
});

console.log("search result:",result);

var remove = list.remove(function(a){
  return a.surname == "çevik";
});

console.log("remove",remove);

list.display();

module.exports = DLinkedList;

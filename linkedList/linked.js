var Node = require('./node.js');

function LinkedList(){
    this.head = new Node("head");
    this.current = this.head;
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.display = display;
}

function insert(newElement){
    var newNode = new Node(newElement);
    this.current.next = newNode;
    newNode.next = null;
    this.current = newNode;
};

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
};

function display(){
    var currNode = this.head;
    do{
        console.log(currNode.next.element);
        currNode = currNode.next;
    }while(currNode.next!=null);
};

function remove(node){
    var self = this;
    
    var prev = prevNode(node);

    var willDelete = this.find(node);
    prev.next = willDelete.next;
    
    function prevNode(node){
        var currNode = self.head;
        while(currNode.next.element != node){
            currNode = currNode.next;
        }
        return currNode;
    }

};

var llist = new LinkedList();
llist.insert("omer");
llist.insert("eray");
llist.insert("pamir");
llist.insert("eyup");
llist.remove("pamir");
llist.display();


module.exports = LinkedList;
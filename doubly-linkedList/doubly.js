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
	this.current.next = newNode;
	newNode.next = null;
	newNode.prev = this.current;
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
	willDelete.prev.next = willDelete.next;
	willDelete.next.prev = willDelete.prev
};

module.exports = DLinkedList;
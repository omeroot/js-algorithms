# js-algorithms
  javascript algorihtms on objects
#Install
  $npm install javascript-algorithms 
  
##Binary Search Tree

  ```js 
  var bst = new js_algorithms.BinarySearchTree();
  
  bst.insert({x: 4}, function (a, b) {
    return a.x > b.x;//if you want add less value to left brench, use '>' operator,
  });
  
  bst.getMax();
  
  bst.getMin();
  
  bst.find(23, function (a) {
    return a.x;
  });
  
  bst.remove(function(a){
    return a.x == 23;
  });
  ```
    
##Doubly Linked List
  
  ```js
  var list = new js_algorithms.DoublyLinkedList();
  
  list.insert({name:"omer",surname:"demircan"});
  
  list.find(function(a){
    return a.name == "omer";
  });
  
  list.remove(function(a){
    return a.surname == "çevik";
  });
  ```
  
##Hash

  ```js
  var hash = new js_algorithms.Hash({size: 137});
  
  hash.put({name: "omer"});
  
  hash.get({name: "omer"})
  ```
  
##Linked List

  ```js
  var llist = new js_algorithms.LinkedList();
  
  llist.insert({name: "omer"});
  
  llist.find(function(a){
    return a.name == "omer";
  });
  
  llist.remove(function(a){
    return a.name == "pamir";
  });
  ```
  
##Graphs

  ```js
  var g = new js_algorithms.Graph(GRAPH_SIZE);
  
  g.addEdge("a", "b", 3);
  g.addEdge("a", "c", 5);
  g.addEdge("b", "e", 1);
  
  var p = g.dijkstra("a","e"); //Output : [a,b,e]
  
  g.clearVisitedList();
  var g.depthFirstSearch(START_NODE);
  
  g.clearVisitedList();//clear before visited list (set to false all of them)
  var g.breadthFirstSearch(START_NODE);
  ```
  
##Sort Algorithms

  ```js
  var s = new js_algorithms.Sorting();
  
  //select any arr variable
  var arr = s.CreateRandomArray(11).data; //[,4,6,7,3,66,3]
  var arr = [{x:4,y:6},{x:2,y:7},{x:66,y:3},{x:14,y:0},{x:6,y:5},{x:2,y:5}];
  
  s.selectionSorting(arr, function(a, b){
    return a.x < b.x;
  });
  
  s.insertionSort(arr, function(a, b){
    return a.x < b.x;
  });
  
  s.shellSort(arr, function(a, b){
    return a.x < b.x;
  });
  
  //only mergeSort callback is different from other 
  s.mergeSort(arr, function(a){
    return a.x;
  });
  
  s.quickSort(arr, function(a, b){
    return a.x < b.x
  });
  ```
  
##Huffman
  ```js
  var huffman = new js_algorithms.Huffman("omer demircan");
  huffman.encode();//returned : 1011101100...
  ```

# js-algorithms
                                                                                
                                                                                
                         _______                                                
                         __  __ \______ ________________                        
                         _  / / /_  __  __ \  _ \_  ___/                        
                         / /_/ /_  / / / / /  __/  /                            
                         \____/ /_/ /_/ /_/\___//_/                             
                                                                                
            ________                _____                                       
            ___  __ \___________ ______(_)__________________ _______            
            __  / / /  _ \_  __  __ \_  /__  ___/  ___/  __  /_  __ \           
            _  /_/ //  __/  / / / / /  / _  /   / /__ / /_/ /_  / / /           
            /_____/ \___//_/ /_/ /_//_/  /_/    \___/ \__,_/ /_/ /_/            
                                                                     
                                                                     
##Binary Search Tree

  ```js 
  var bst = new js_algorithms.BinarySearchTree();
  
  bst.insert({x: 4}, function (a, b) {
    return a.x > b.x;
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
  ```
  
##Sort Algorithms

  ```js
  var s = new js_algorithms.Sorting();
  var arr = s.CreateRandomArray(11).data;
  
  s.selectionSorting(arr);
  
  s.WTFinsertionSort(arr);
  
  s.insertionSort(arr);
  
  s.shellSort(arr);
  
  s.mergeSort(arr);
  
  s.quickSort(arr);
  ```

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

(function (globals) {

  function BinarySearchTree() {
    this.baseNode = {
      data: null,
      right: null,
      left: null
    };
    this.root = null;
    this.insert = insertToBinarySearch;
    this.inOrder = displayInOrder;
    this.preOrder = displayPreOrder;
    this.postOrder = displayPostOrder;
    this.getMin = getMinOnBinarySearch;
    this.getMax = getMaxOnBinarySearch;
    this.find = findOnBinarySearch;
    this.remove = removeOnBinarySearch;
    this.removeNode = removeNodeOnBinarySearch;
  }

  function insertToBinarySearch(data, callback) {
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
    return node;
  }

  function getMinOnBinarySearch() {
    var curr = this.root;
    var min = curr.data;

    while (!(curr == null)) {
      min = curr.data;
      curr = curr.left;
    }

    return min;
  }

  function getMaxOnBinarySearch() {
    var curr = this.root;
    var max;
    while (!(curr == null)) {
      max = curr.data;
      curr = curr.right;
    }

    return max;
  }

  function findOnBinarySearch(item, callback) {
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

  function removeOnBinarySearch(data) {
    var root = this.removeNode(this.root, data);
    return root;
  }

  function removeNodeOnBinarySearch(node, data) {
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

  function displayInOrder(node) {
    if (!(node == null)) {
      inOrder(node.left);
      process.stdout.write(node.get() + " ");
      inOrder(node.right);
    }
  }

  function displayPreOrder(node) {
    if (!(node == null)) {
      process.stdout.write(node.get() + " ");
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  function displayPostOrder(node) {
    if (!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      process.stdout.write(node.get() + " ");
    }
  }


  /*

   * thinking US state map;
   * each town is connected with other town with roads
   * a map is type of graph.
   * each town is vertex and a road that connects two towns is a edge
   * edges ==> (v1,v2)  v1: town 1 and v2: town 2
   * vertexs can also have a weight(cost)
   * a path is squence of vertices in a graph
   *
   * One example is traffic flow. The vertices represent street intersections, and the edges represent the streets.
   * Weighted edges can be used to represent speed limits or the number of lanes
   *
   * */

  function Graph(v) {
    this.adj = {};
    this.visited = {};
    this.edgeTo = [];
    this.edges = 0;
    this.addEdge = addEdge;
    this.display = showGraph;
    this.clearVisitedList = clearVisitedList;
    this.depthFirstSearch = depthFirstSearch;
    this.breadthFirstSearch = breadthFirstSearch;
    this.dijkstra = dijkstra;
    //this.pathTo = pathTo;
  }

  function addEdge(v1, v2, cost) {
    //var edge = new Edge();

    if (!this.adj.hasOwnProperty(v1)) {
      this.adj[v1] = [];
      this.visited[v1] = false;
    }
    if (!this.adj.hasOwnProperty(v2)) {
      this.adj[v2] = [];
      this.visited[v2] = false;
    }

    this.adj[v1].push({
      to: v2,
      cost: cost
    });
    this.adj[v2].push({
      to: v1,
      cost: cost
    });
    this.edges++;
  }

  function showGraph() {
    for (var key in this.adj) {
      process.stdout.write(key + "--> ");
      for (var i = 0; i < this.adj[key].length; i++) {
        process.stdout.write(this.adj[key][i].to + " ");
      }
      process.stdout.write("\n");
    }
  }

//GRAPH SEARCH
//depth-first search
//breadth-first search

  function depthFirstSearch(v) {

    if (this.adj.hasOwnProperty(v)) {
      this.visited[v] = true;
    }
    for (var i = 0; i < this.adj[v].length; i++) {
      if (this.visited[this.adj[v][i].to] == false) {
        this.dfs(this.adj[v][i].to);
      }
    }
  }


  function breadthFirstSearch(v) {
    var queue = [];
    //this.visited[v] = true;
    queue.push(v);

    while (queue.length > 0) {
      var s = queue.shift();
      if (this.visited[s] == false) {
        this.visited[s] = true;
      }
      for (var i = 0; i < this.adj[s].length; i++) {
        if (!this.visited[this.adj[s][i].to]) {
          queue.push(this.adj[s][i].to);
          this.edgeTo[this.adj[s][i].to] = s;
        }
      }
    }
  }

  /*
   function pathTo(target) {
   var source = "a";
   this.bfs(source);
   var path = [];

   for (var i = target; i != source; i = this.edgeTo[i]) {
   path.push(i);
   }
   path.push(source);
   return path.reverse();

   }*/

  function clearVisitedList() {
    for (var key in this.visited) {
      this.visited[key] = false;
    }
  }

  function dijkstra(source, target) {
    var dList = {};
    var tempList = {};
    var queue = [];
    var paths = {};
    var vCounter = 0;

    queue.push(source);

    for (var key in this.adj) {
      dList[key] = Infinity;
      paths[key] = []
    }

    console.log(paths);

    while (queue.length > 0) {
      var s = queue.shift();

      if (this.visited[s] == false) {
        vCounter++;
        if (dList[s] == Infinity) {
          dList[s] = 0;
          paths[s].push(s);
        }
        this.visited[s] = true
      }
      //console.log(this.adj[s]);
      for (var i = 0; i < this.adj[s].length; i++) {
        queue.push(this.adj[s][i].to);
        var totalCost = dList[s] + this.adj[s][i].cost;
        if (totalCost < dList[this.adj[s][i].to]) {
          paths[this.adj[s][i].to] = paths[s].slice();
          paths[this.adj[s][i].to].push(this.adj[s][i].to);
          dList[this.adj[s][i].to] = dList[s] + this.adj[s][i].cost;
          tempList = dList;
        }
      }

      if ((vCounter % 7 == 0) && (tempList == dList)) {
        break;
      }

    }

    return paths[target];
  }

  function LinkedList() {
    this.baseNode = {
      element: null,
      next: null
    };
    this.head = new Node("head");
    this.current = this.head;
    this.insert = insertToLinkedList;
    this.remove = removeOnLinkedList;
    this.find = findOnLinkedList;
    this.display = showLinkedList();
  }

  function insertToLinkedList(newElement) {
    var newNode = JSON.parse(JSON.stringify(newElement));
    this.current.next = newNode;
    newNode.next = null;
    this.current = newNode;
  };

  function findOnLinkedList(callback) {
    var currNode = this.head.next;
    while (callback(currNode.element)) {
      currNode = currNode.next;
    }
    return currNode;
  };

  function showLinkedList() {
    var currNode = this.head;
    do {
      console.log(currNode.next.element);
      currNode = currNode.next;
    } while (currNode.next != null);
  };

  function removeOnLinkedList(callback) {
    var currNode = this.head.next;
    var prev = currNode;

    while (!callback(currNode.element)) {
      prev = currNode;
      currNode = currNode.next;
    }
    prev.next = currNode.next;

    return currNode;
  };


  /**
   * Bubble Sort
   * Selection Sort
   * Insertion Sort
   * --------------
   * ShellSort
   * MergeSort
   * QuickSort
   */

  function Sorting() {
    this.CreateRandomArray = CreateRandomArray;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSorting = selectionSorting;
    this.shellSort = shellSort;
    this.insertionSort = insertionSort;
    this.mergeSort = mergeSort;
    this.quickSort = quickSort;
  }

  function CreateRandomArray(size) {
    var data = [];
    for (var i = 0; i < size; i++) {
      data[i] = Math.floor(Math.random() * (size * 20 + 1));
    }
    return data;
  }

  function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

//one of the slowest sorting algorithms but easiest
  function bubbleSort(arr, callback) {
    for (var i = 0; i < arr.length - 2; i++) {
      for (var j = 0; j < arr.length - 1; j++) {
        if (callback(arr[j], arr[j + 1])) {
          this.swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }

  function selectionSorting(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          this.swap(arr, i, j);
        }
      }
    }

    return arr;
  }

  function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      var temp = arr[i];
      var j = i;
      while (j > 0 && (arr[j - 1] > temp)) {
        arr[j] = arr[j - 1];
        j = j - 1;
      }
      arr[j] = temp;
    }
    return arr;
  }

  function shellSort(arr) {
    var step = arr.length / 2;

    while (step > 0) {
      for (var i = step; i < arr.length; i++) {
        var k = arr[i];
        for (var j = i; j >= step && k < arr[j - step]; j -= step) {
          arr[j] = arr[j - step];
        }
        arr[j] = k;
      }
      step = parseInt(step / 2);
    }

    return arr;
  }

  function mergeSort(arr) {
    var step = 1;
    var left, right;

    while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
        mergeArray(arr, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < arr.length) {
        mergeArray(arr, left, left + step, right, arr.length);
      }
      step *= 2;
    }

    function mergeArray(arr, startleft, stopleft, startright, stopright) {
      var leftArr = new Array(stopleft - startleft + 1);
      var rightArr = new Array(stopright - startright + 1);

      for (var i = 0; i < (leftArr.length); i++) {
        leftArr[i] = arr[startleft + i];
      }

      for (var i = 0; i < (rightArr.length) - 1; i++) {
        rightArr[i] = arr[startright + i];
      }

      leftArr[leftArr.length - 1] = Infinity;
      rightArr[rightArr.length - 1] = Infinity;
      var m = 0;
      var n = 0;
      for (var k = startleft; k < stopright; k++) {
        if (leftArr[m] <= rightArr[n]) {
          arr[k] = leftArr[m];
          m++;
        }
        else {
          arr[k] = rightArr[n];
          n++;
        }
      }
    }

    return arr;
  }

  function quickSort(arr) {
    if (arr.length == 0) {
      return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }


  function DoublyLinkedList() {
    this.baseNode = {
      element: null,
      next: null,
      prev: null
    };
    this.head = new Node("head");
    this.current = this.head;
    this.insert = insertToDoublyLinkedList;
    this.remove = removeOnDoublyLinkedList;
    this.display = showDoublyLinkedList;
    this.find = findOnDoublyLinkedList;
  };

  function insertToDoublyLinkedList(item) {
    var newNode = JSON.parse(JSON.stringify(this.baseNode));
    newNode.element = item;
    this.current.next = newNode;
    newNode.next = null;
    newNode.prev = this.current;
    this.current = newNode;
  };

  function findOnDoublyLinkedList(callback) {
    var curr = this.head.next;
    while (!callback(curr.element)) {
      curr = curr.next;
    }
    return curr;
  };

  function removeOnDoublyLinkedList(callback) {
    var willDelete = this.find(callback);

    willDelete.prev.next = willDelete.next;

    if (willDelete.next != null) {
      willDelete.next.prev = willDelete.prev
    }

    return willDelete;
  };

  function showDoublyLinkedList() {
    var curr = this.head.next;
    while (curr != null) {
      console.log(curr.element);
      curr = curr.next;
    }
  }


  /*
   * hash table size is an important strategy
   * sometimes size should be prime number
   * and it is possible for two keys to hash
   * to the same value.this is called collision
   * important point is this situation!!
   *
   * Name  | Hash Function                 | Hash Value  | Hash Table
   * ------ ------------------------------- ------------- ------------------------
   * Durr  | (68 + 117 + 114 + 114)        |   413       | hash array[413] = Durr
   * Smith | (83 + 109 + 105 + 116 + 104)  |   517       | hash array[517] = Smith
   *
   *
   *
   * necessary due to the use of modular arithmatic in computing the key
   * hash table size greater than 100 for evenly disperse the keys in hash table
   * method for detect collision and resolve,it is seperate chaining
   * Name  | Hash Function                 | Hash Value  | Hash Table
   * ------ ------------------------------- ------------- ------------------------
   * Durr  | (68 + 117 + 114 + 114)        |   413       | hash array[413] = [Durr,Durr]
   * Smith | (83 + 109 + 105 + 116 + 104)  |   517       | hash array[517] = [Smith]
   */

  var HASH_TABLE_SIZE;

  function HashTable(base) {
    HASH_TABLE_SIZE = base.size;
    this.table = new Array(HASH_TABLE_SIZE);
    this.simpleHash = simpleHash;
    this.display = showHashTable;
    this.put = putToTable;
    this.get = getFromTable;
    this.buildChains = buildChains;
    this.buildChains();
  }

  function putToTable(data) {
    var address = this.simpleHash(data);
    var find = false;

    if (this.table[address][0] == undefined) {
      this.table[address][0] = data;
    } else {
      for (var j = 1; j < this.table[address].length + 1; j++) {
        if (this.table[address][j] == undefined) {
          this.table[address][j] = data;
          break;
        }
      }
    }
  };

  function getFromTable(key) {
    return this.table[this.simpleHash(key)];
  }

  function showHashTable() {
    console.log("\033[31mAddress    |   \033[31mValue\x1b[0m");
    console.log("----------- -----------");
    for (var i = 0; i < HASH_TABLE_SIZE; i++) {
      var val = this.table[i];
      if (val.length != 0) {
        process.stdout.write(i.toString());
        for (var j = 0; j < 11 - i.toString().length; j++) {
          process.stdout.write(" ");
        }
        process.stdout.write("|   ");
        for (var k = 0; k < val.length; k++) {
          process.stdout.write(JSON.stringify(val[k]) + " ");
        }
        process.stdout.write("\n");
        console.log("----------- -----------");
      }
    }
  };

  function buildChains() {
    for (var i = 0; i < HASH_TABLE_SIZE; i++) {
      this.table[i] = new Array();
    }
  };

  function simpleHash(item) {
    if (typeof item === 'string') {
      return StringHash(item);
    } else if (Object.prototype.toString.apply(item) === "[object Object]") {
      return StringHash(JSON.stringify(item));
    } else if (Object.prototype.toString.apply(item) === "[object Array]") {
      ///
      return undefined
    } else if (typeof item === 'number') {
      return IntegerHash();
    } else {
      throw new TypeError("unexpected data type", "hashTable.js", 24);
    }
  };

  function IntegerHash() {
    var num = "";

    for (var i = 1; i <= 9; i++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1));
    };

    return num;
  };

  function StringHash(item) {
    var total = 0;
    const H = 37;

    for (var i = 0; i < item.length; i++) {
      total += total * H + item.charCodeAt(i);
    }
    total = total % HASH_TABLE_SIZE;
    if (total < 0) {
      total += HASH_TABLE_SIZE - 1;
    }
    return parseInt(total);
  }


  var full = {
    BinarySearchTree: BinarySearchTree,
    Graph: Graph,
    Sorting: Sorting,
    Hash: HashTable,
    DoublyLinkedList: DoublyLinkedList,
    LinkedList: LinkedList
  };

  console.log(globals);

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = full;
    }
    exports.js_algorithms = full;
  } else {
    globals.js_algorithms = full;
  }

  if (typeof define === 'function' && define.amd) {
    define('js-algorithms', [], function () {
      return full;
    });
  }

})(this);
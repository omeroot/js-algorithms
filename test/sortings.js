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
  this.CArray = CArray;
  this.data = [];
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.selectionSorting = selectionSorting;
  this.shellSort = shellSort;
  this.insertionSort = insertionSort;
  this.mergeSort = mergeSort;
  this.quickSort = quickSort;
}

function CArray(size) {
  for (var i = 0; i < size; i++) {
    this.data[i] = Math.floor(Math.random() * (size * 20 + 1));
  }
  return this;
}

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

//one of the slowest sorting algorithms but easiest
function bubbleSort(arr, callback) {
  for(var i = arr.length ; i>=2 ; --i){
    for(var j = 0 ; j< i -1 ; ++j){
      if(callback(arr[j], arr[j+1])){
        this.swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

function selectionSorting(arr, callback) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (callback(arr[i], arr[j])) {
        this.swap(arr, i, j);
      }
    }
  }

  return arr;
}

function insertionSort(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i;
    while (j > 0 && callback(arr[j-1], temp)) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = temp;
  }
  return arr;
}

function shellSort(arr, callback) {
  var step = parseInt(arr.length / 2);

  while (step > 0) {
    for (var i = step; i < arr.length; i++) {
      var k = arr[i];
      for (var j = i; j >= step && callback(k, arr[j - step]); j -= step) {
        arr[j] = arr[j - step];
      }
      arr[j] = k;
    }
    step = parseInt(step / 2);
  }

  return arr;
}

function mergeSort(arr, callback) {
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArray(arr, left, left + step, right, right + step, callback);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArray(arr, left, left + step, right, arr.length, callback);
    }
    step *= 2;
  }

  function mergeArray(arr, startleft, stopleft, startright, stopright, callback) {
    var leftArr = new Array(stopleft - startleft + 1);
    var rightArr = new Array(stopright - startright + 1);

    x = startleft;
    for (var i = 0; i < (leftArr.length - 1) ; ++i) {
      leftArr[i] = arr[x];
      ++x;
    } 
    x = startright;
    for (var i = 0; i < (rightArr.length - 1) ; ++i) {
      rightArr[i] = arr[x];
      ++x;
    }

    leftArr[leftArr.length - 1] = Infinity;
    rightArr[rightArr.length - 1] = Infinity;
    var m = 0;
    var n = 0;
    var l;
    var r;
    for (var k = startleft; k < stopright; ++k) {
      //console.log(leftArr,rightArr[n],m,n);
      //l =( (leftArr[m] == Infinity) ? Infinity : callback(leftArr[m]) );
      //r =( (rightArr[n] == Infinity) ? Infinity : callback(rightArr[n]) );
      if ( ( (leftArr[m] == Infinity) ? Infinity : callback(leftArr[m]) ) 
        <= ( (rightArr[n] == Infinity) ? Infinity : callback(rightArr[n]) ) ) {
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

function quickSort(arr, callback) {
  if(arr.length == 0){
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for(var i = 1 ; i< arr.length ; i++){
    if(callback(arr[i], pivot)){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  var x =  quickSort(left, callback).concat(pivot, quickSort(right, callback));

  return x;
}


var s = new Sorting();
//var arr = s.CArray(11).data;
arr = [{x:4,y:6},{x:2,y:7},{x:66,y:3},{x:14,y:0},{x:6,y:5},{x:2,y:5}];

console.log(arr);
console.log("result",s.mergeSort(arr,function(a){
  return a.x;
}));
//console.log(s.selectionSorting(arr));
//console.log(s.WTFinsertionSort(arr));Ş
//console.log(s.insertionSort(arr));
//console.log(s.shellSort(arr)); 
//console.log(s.mergeSort(arr)); 
//console.log(s.quickSort(arr)); 

module.exports = Sorting;

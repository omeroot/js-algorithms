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
  if(arr.length == 0){
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for(var i = 1 ; i< arr.length ; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  console.log(left,right);
  var x =  quickSort(left).concat(pivot, quickSort(right));
  console.log("x",x);
  return x;
}


var s = new Sorting();
var arr = s.CArray(11).data;


console.log(arr);
//console.log(s.selectionSorting(arr));
//console.log(s.WTFinsertionSort(arr));
//console.log(s.insertionSort(arr));
//console.log(s.shellSort(arr));
//console.log(s.mergeSort(arr));
console.log(s.quickSort(arr));

module.exports = Sorting;

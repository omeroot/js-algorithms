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
}

function CArray(size) {
  for (var i = 0; i < size; i++) {
    this.data[i] = Math.floor(Math.random() * (size*20 + 1));
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
      if (callback(arr[j], arr[j+1])) {
        this.swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function selectionSorting(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length  ; j++) {
      if (arr[i] > arr[j]) {
        this.swap(arr, i, j);
      }
    }
  }

  return arr;
}

function insertionSort(arr){
  for(var i = 0 ; i< arr.length ; i++){
    var temp = arr[i];
    var j = i;
    while(j > 0 && (arr[j-1] > temp) ){
      arr[j] = arr[j-1];
      j = j - 1;
    }
    arr[j] = temp;
  }
  return arr;
}

function shellSort(arr){
  var step = arr.length / 2;

  while(step > 0) {
    for (var i = step; i < arr.length; i++) {
      var k = arr[i];
      for(var j = i ; j>=step && k < arr[j - step] ; j -= step){
        arr[j] = arr[j-step];
      }
      arr[j] = k;
    }
    step = parseInt(step / 2);
  }

  return arr;
}

function mergeSort(arr){
  /////
}


var s = new Sorting();
var arr = s.CArray(11).data;


console.log(arr);
//console.log(s.selectionSorting(arr));
//console.log(s.WTFinsertionSort(arr));
//console.log(s.insertionSort(arr));
//console.log(s.shellSort(arr));



module.exports = Sorting;
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
  this.WTFinsertionSort = WTFinsertionSort;
  this.shellSort = shellSort;
  this.insertionSort = insertionSort;
}

//Array.prototype.bubbleSort = function (callback) {
//  var res = [];
//  for (var i = 0; i < this.length - 1; i++) {
//    res.push(callback(this[i], i, this));
//  }
//  return res;
//};

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

function WTFinsertionSort(arr){
  var res = [];
  res.push(arr[0]);
  console.log(res);
  for(var i = 1 ;i < arr.length ; i++){
    res.push(arr[i]);
    for(var j = 0 ; j< res.length - 1  ; j++){
      if(arr[i] < res[j]){
        console.log("before",res);
        console.log("index(i):",i,"index(j):",j," change");
        this.swap(res, i, j);
        console.log("after",res);
        console.log("-------");
      }
    }
  }

  return res;
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

}


var s = new Sorting();
var arr = s.CArray(10).data;

//console.log(s.bubbleSort(function(a, b ){
//  return a < b;
//}).data);
//console.log(s.selectionSorting(arr));
//var arr = [64,32,85,24,13];
console.log(arr);
//console.log(s.WTFinsertionSort(arr));
console.log(s.insertionSort(arr));

//var x = arr.bubbleSort(function (item, index, array) {
//  return array[index] > array[index + 1];
//});
//console.log(x);

module.exports = Sorting;
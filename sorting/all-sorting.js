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

}

function CArray(size) {
  for (var i = 0; i < size; i++) {
    this.data[i] = Math.floor(Math.random() * (size + 1));
  }
  return this;
}

function swap(index1, index2) {
  var temp = this.data[index1];
  this.data[index1] = this.data[index2];
  this.data[index2] = temp;
}

//one of the slowest sorting algorithms but easiest
function bubbleSort() {
  for (var i = 0; i < this.data.length; i++) {
    for (var j = 0; j < this.data.length - 1; j++) {
      if (this.data[j] > this.data[j+1]) {
        this.swap(this.data[j], this.data[j+1]);
      }
    }
  }
  return this;
}


var s = new Sorting();
console.log(s.CArray(10).data);
console.log(s.bubbleSort().data);

module.exports = Sorting;

/*
[].bıbıl(function (a, b) {
  return a.x > b.x;
});
*/
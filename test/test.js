function x(){
  this.data;
}

function y(){
  this.data;
}

var xx = new x();
var yy = new y();
xx.data = "omer";

console.log(xx);
console.log(yy);

console.log(xx.data);
console.log(yy.data);
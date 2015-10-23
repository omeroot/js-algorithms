/*
*   a set containing no members is called the empty set,set of all is possible member
*   two sets are considered equal if they contain exactly same members
*   a set is considered a subset of another set,all the member of first set are contained in the second set
*
*   Set Operations
*     union : a new set is obtained by combining  members of one set with the members of another set.
*     intersection : A new set is obtained by adding all the members of one set that also exist in a second set.
*     difference : A new set is obtained by adding all the members of one set except those that also exist in a second set.
*/


function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersection = intersection;
  this.contains = contains;
  this.difference = difference;
  this.show = show;
  this.get = get;
};

function add(data){
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);

    return true;
  } else {

    return false;
  }
}

function remove(data){
  var index;
  if ((index = this.dataStore.indexOf(data)) > -1){
    this.dataStore.splice(index,1);

    return true;
  } else {

    return false;
  }
}

function get(index){

  return this.dataStore[index];
}

function size(){

  return this.dataStore.length;
}

function show(){
  console.log(this.dataStore);
}

function contains(item){
  if(this.dataStore.indexOf(item) < 0){

    return false;
  } else {

    return true;
  }
}

function union(secondSet){
  var tempSet = new Set();

  for(var i = 0 ; i< this.size() ; i++){
    tempSet.add(this.get(i));
  }
  for(var j = 0 ; j< secondSet.size() ; j++){
    if(!(tempSet.contains(secondSet.get(j)))){
      tempSet.add(secondSet.get(j));
    }
  }

  return tempSet;
}

function intersection(secondSet){
  var tempSet = new Set();

  for(var j = 0 ; j< secondSet.size() ; j++){
    if(this.contains(secondSet.get(j))){
      tempSet.add(secondSet.get(j));
    }
  }

  return tempSet;
}

function difference(secondSet){
  var tempSet = new Set();

  for(var i = 0 ; i< secondSet.size() ; i++){
    if(!(secondSet.contains(this.get(i)))){
      tempSet.add(this.get(i));
    }
  }

  return tempSet;
}

var x = new Set();
var y = new Set();
x.add(1);
x.add(2);
x.add(3);
x.add(1);

y.add(325);
y.add(321);
y.add(2);

x.show();
y.show();

var n = x.difference(y);
n.show();




module.exports = Set;
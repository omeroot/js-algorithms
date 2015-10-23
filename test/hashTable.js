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

function HashTable(base){
  HASH_TABLE_SIZE = base.size;
  this.table = new Array(HASH_TABLE_SIZE);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;
  this.buildChains();
}

function put(data){
  var address = this.simpleHash(data);
  var find = false;

  if(this.table[address][0] == undefined){
    this.table[address][0] = data;
  }else{
    for(var j = 1 ; j< this.table[address].length + 1 ; j++){
      if(this.table[address][j] == undefined){
        this.table[address][j] = data;
        break;
      }
    }
  }
};

function get(key){
  return this.table[this.simpleHash(key)];
}

function showDistro(){
  console.log("\033[31mAddress    |   \033[31mValue\x1b[0m");
  console.log("----------- -----------");
  for(var i = 0 ; i< HASH_TABLE_SIZE ; i++){
    var val = this.table[i];
    if(val.length != 0){
      process.stdout.write(i.toString());
      for(var j = 0 ; j< 11-i.toString().length ; j++){
        process.stdout.write(" ");
      }
      process.stdout.write("|   ");
      for(var k = 0 ; k< val.length ; k++){
        process.stdout.write(JSON.stringify(val[k]) + " ");
      }
      process.stdout.write("\n");
      console.log("----------- -----------");
    }
  }
};

function buildChains(){
  for(var i = 0 ; i < HASH_TABLE_SIZE ; i++){
    this.table[i] = new Array();
  }
};

function simpleHash(item){
  if(typeof item === 'string'){
    return StringHash(item);
  }else if(Object.prototype.toString.apply( item ) === "[object Object]"){
    return StringHash(JSON.stringify(item));
  }else if(Object.prototype.toString.apply( item ) === "[object Array]"){
    ///
    return undefined
  }else if(typeof item === 'number'){
    return IntegerHash();
  }else{
    throw new TypeError("unexpected data type","hashTable.js",24);
  }
};

function IntegerHash(){
  var num = "";

  for(var i = 1 ; i<=9 ; i++){
    num += Math.floor(Math.random()*10);
  }
  num += getRandomInt(50,100);

  function getRandomInt(min, max){
    return Math.floor(Math.random()*(max - min +1));
  };

  return num;
};

function StringHash(item){
  var total = 0;
  const H = 37;

  for(var i = 0 ; i < item.length ; i++){
    total += total * H + item.charCodeAt(i);
  }
  total = total % HASH_TABLE_SIZE;
  if(total < 0){
    total += HASH_TABLE_SIZE -1;
  }
  return parseInt(total);
};

var hash = new HashTable({size: 137});

hash.put({name: "omer"});
hash.put({name: "omer"});
hash.put({name: "eray"});
hash.put({name: "pamir"});
hash.put("node.js");

hash.showDistro();

console.log("getting",hash.get({name:"omer"}));


module.exports = HashTable;

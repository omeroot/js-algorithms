/*
*	hash table size is an important strategy
*	sometimes size should be prime number 
*	and it is possible for two keys to hash
*	to the same value.this is called collision
*	important point is this situation!!
*
*	Name  | Hash Function 			      | Hash Value  | Hash Table
*	------ ------------------------------- ------------- ------------------------
*	Durr  | (68 + 117 + 114 + 114)  	  |		413	  	| hash array[413] = Durr
*	Smith |	(83 + 109 + 105 + 116 + 104)  |		517  	| hash array[517] = Smith
*/

var HASH_TABLE_SIZE = 137;

function HashTable(){
	this.table = new Array(HASH_TABLE_SIZE);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

function put(){

};

function simpleHash(){
  
};

module.exports = HashTable;
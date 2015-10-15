/*

* thinking US state map;
* each town is connected with other town with roads
* a map is type of graph.
* each town is vertex and a road that connects two towns is a edge
* edges ==> (v1,v2)  v1: town 1 and v2: town 2
* vertexs can also have a weight(cost)
*a path is squence of vertices in a graph
*
* One example is traffic flow. The vertices represent street intersections, and the edges represent the streets.
* Weighted edges can be used to represent speed limits or the number of lanes
*
* */

var Edge = require('./edge.js');

function Graph(v){
  this.adj = {};
  this.visited = {};
  this.edges = 0;
  this.vertices = v;
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
}

function addEdge(v1, v2){
  //var edge = new Edge();

  if(!this.adj.hasOwnProperty(v1)){
    this.adj[v1] = [];
    this.visited[v1] = false;
  }
  if(!this.adj.hasOwnProperty(v2)){
    this.adj[v2] = [];
    this.visited[v2] = false;
  }

  this.adj[v1].push(v2);
  this.adj[v2].push(v1);
  this.edges++;
}

function showGraph(){
  for(var key in this.adj){
    process.stdout.write(key + "--> ");
    for(var i = 0 ; i<this.adj[key].length ; i++){
      process.stdout.write(this.adj[key][i] + " ");
    }
    process.stdout.write("\n");
  }
}

//GRAPH SEARCH
//depth-first search
//breadth-first search

function dfs(v) {
  this.visited[v] = true;

  if(this.adj.hasOwnProperty(v)){
    console.log("visited ", v);
  }
  for(var i = 0 ; i< this.adj[v].length ; i++){
    if(this.visited[this.adj[v][i]] == false){
      this.dfs(this.adj[v][i]);
    }
  }
}

function bfs(){

}

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

g.showGraph();

//console.log(g.visited);
g.dfs(0);

module.exports = Graph;
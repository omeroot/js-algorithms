/*

 * thinking US state map;
 * each town is connected with other town with roads
 * a map is type of graph.
 * each town is vertex and a road that connects two towns is a edge
 * edges ==> (v1,v2)  v1: town 1 and v2: town 2
 * vertexs can also have a weight(cost)
 * a path is squence of vertices in a graph
 *
 * One example is traffic flow. The vertices represent street intersections, and the edges represent the streets.
 * Weighted edges can be used to represent speed limits or the number of lanes
 *
 * */

var Edge = require('./edge.js');

function Graph(v) {
  this.adj = {};
  this.visited = {};
  this.edgeTo = [];
  this.edges = 0;
  this.vertices = v;
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.clearVisitedList = clearVisitedList;
  this.dfs = dfs;
  this.bfs = bfs;
  this.pathTo = pathTo;
}

function addEdge(v1, v2, cost) {
  //var edge = new Edge();

  if (!this.adj.hasOwnProperty(v1)) {
    this.adj[v1] = [];
    this.visited[v1] = false;
  }
  if (!this.adj.hasOwnProperty(v2)) {
    this.adj[v2] = [];
    this.visited[v2] = false;
  }

  this.adj[v1].push({
    to: v2,
    cost: cost
  });
  this.adj[v2].push({
    to: v1,
    cost: cost
  });
  this.edges++;
}

function showGraph() {
  for (var key in this.adj) {
    process.stdout.write(key + "--> ");
    for (var i = 0; i < this.adj[key].length; i++) {
      process.stdout.write(this.adj[key][i].to + " ");
    }
    process.stdout.write("\n");
  }
}

//GRAPH SEARCH
//depth-first search
//breadth-first search

function dfs(v) {

  if (this.adj.hasOwnProperty(v)) {
    this.visited[v] = true;
    console.log("visited ", v);
  }
  for (var i = 0; i < this.adj[v].length; i++) {
    if (this.visited[this.adj[v][i].to] == false) {
      this.dfs(this.adj[v][i].to);
    }
  }
}

function pathTo(target) {
  var source = "a";
  var path = [];

  for(var i = target ; i!= source ; i = this.edgeTo[i]){
    path.push(i);
  }
  path.push(source);
  return path.reverse();

}

function clearVisitedList() {
  for (var key in this.visited) {
    this.visited[key] = false;
  }
}

function bfs(v) {
  var queue = [];
  //this.visited[v] = true;
  queue.push(v);

  while (queue.length > 0) {
    var s = queue.shift();
    if (this.visited[s] == false) {
      console.log("visited", s);
      this.visited[s] = true;
    }
    for (var i = 0; i < this.adj[s].length; i++) {
      if (!this.visited[this.adj[s][i].to]) {
        queue.push(this.adj[s][i].to);
        this.edgeTo[this.adj[s][i].to] = s;
      }
    }
  }
}

var g = new Graph(7);
g.addEdge("a", "b",3);
g.addEdge("a", "c",4);
g.addEdge("b", "d",1);
g.addEdge("c", "e",5);
g.addEdge("a", "f",7);
g.addEdge("b", "e",6);
g.addEdge("e", "g",4);

g.showGraph();


//g.clearVisitedList();
g.dfs("a");
console.log("-----");
g.clearVisitedList();
g.bfs("a");
//console.log(g.edgeTo);
//
//console.log(g.pathTo("e"));

module.exports = Graph;
// has path
// Write a function, hasPath, that takes in an object 
// representing the adjacency list of a directed acyclic 
// graph and two nodes (src, dst). The function should 
// return a boolean indicating whether or not there 
// exists a directed path between the source and 
// destination nodes.

// recursive solution
// Time: O(n + edges), linear time 
// Space: O(n), linear time

const hasPath = (graph, src, dst) => {
    if (src === dst) return true
  
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst) === true) {
        return true
      }
    }
    
    return false
  };

  // iterative solution
  // Time: O(n + edges), linear time
  // Space: O(n), linear time
  const hasPath2 = (graph, src, dst) => {
    const queue = [src]
   
     while (queue.length > 0) {
       const current = queue.shift()
       
       if (current === dst) return true
       
       for (let neighbor of graph[current]) {
         queue.push(neighbor)
       }
     }
   
     return false
};

// undirected path
// Write a function, undirectedPath, that takes in an array 
// of edges for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return a boolean indicating whether or not
// there exists a path between nodeA and nodeB.

// recursive solution
// Time: O(edges), linear time
// Space: O(n), linear time

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildgraph(edges)
    return hasPath3(graph, nodeA, nodeB, new Set())
};
  
const hasPath3 = (graph, src, dst, visited) => {
    if (visited.has(src)) return false
    if (src === dst) return true
  
    visited.add(src)
  
    for (let neighbor of graph[src]) {
      if (hasPath3(graph, neighbor, dst, visited) === true) {
        return true
      }
    }
  
    return false
}
  
const buildgraph = (edges) => {
    const graph = {}
  
    for (let edge of edges) {
      const [a,b] = edge
      if (!(a in graph)) graph[a] = []
      if (!(b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    
    return graph
}

// connected components count
// Write a function, connectedComponentsCount, that takes in the 
// adjacency list of an undirected graph. The function should 
// return the number of connected components within the graph.

// recursive solution:
// Time: O(e), linear time
// Space: O(n), linear time

const connectedComponentsCount = (graph) => {
    if (graph == {}) return 0
    const visited = new Set()
    let count = 0
  
    for (let node in graph) {
  
      if(explore(graph, node, visited) === true) count++
      
    }
  
    return count
};
  
const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false
    visited.add(String(current))
    
    for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited)
    }
  
    return true
}
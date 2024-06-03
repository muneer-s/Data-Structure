class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(v) {
    if (!this.vertices[v]) {
      this.vertices[v] = [];
    }
  }

  hasVertex(vertex) {
    return this.vertices.hasOwnProperty(vertex);
  }

  addEdge(v1, v2) {
    this.vertices[v1].push(v2);
    this.vertices[v2].push(v1); // For undirected graph
  }

  hasEdge(v1, v2) {
    return this.vertices[v1].includes(v2);
  }

  removeVertex(v) {
    for (let list of this.vertices[v]) {
      const i = this.vertices[list].indexOf(v);
      this.vertices[list].splice(i, 1);
    }
    delete this.vertices[v];
  }

  removeEdge(v1, v2) {
    const i1 = this.vertices[v2].indexOf(v1);
    const i2 = this.vertices[v1].indexOf(v2);
    if (i1 !== -1 && i2 !== -1) {
      this.vertices[v1].splice(i2, 1);
      this.vertices[v2].splice(i1, 1);
    }
  }

  // Depth-First Search traversal
  dfs(v, visited = {}) {
    visited[v] = true;
    console.log(v);

    for (let a of this.vertices[v]) {
      if (!visited[a]) {
        this.dfs(a, visited);
      }
    }
  }

  //dfs using stack
  dfsStack(v) {
    let stack = [v];
    let visited = {};

    while (stack.length > 0) {
      let current = stack.pop();

      if (!visited[current]) {
        visited[current] = true;
        console.log(current);
        for (let adjacent of this.vertices[current]) {
          if (!visited[adjacent]) {
            stack.push(adjacent);
          }
        }
      }
    }
  }

  // Breadth-First Search traversal
  bfs(v) {
    const visited = {};
    const queue = [v];
    visited[v] = true;

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current);

      for (let a of this.vertices[current]) {
        if (!visited[a]) {
          visited[a] = true;
          queue.push(a);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log("Vertices:", graph.vertices);

console.log("Edges between A and B:", graph.hasEdge("A", "B"));
console.log("have a vertex between A :", graph.hasVertex("A"));

// graph.removeVertex("C");
// console.log("Vertices after removing C:", graph.vertices);

graph.removeEdge("A", "D");
console.log("Vertices after removing edge:", graph.vertices);

console.log("bfs : ");
graph.bfs("A");
console.log("dfs: ");
graph.dfs("D");

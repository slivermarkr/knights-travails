export default class Chessboard {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacentList = new Map();
  }

  addVertex(vertex) {
    this.adjacentList.set(vertex, new Set());
  }

  addEdges(vertV, vertU) {
    this.adjacentList.get(vertV).add(vertU);
    this.adjacentList.get(vertU).add(vertV);
  }

  knightMoves(start, end) {
    const startNodeKey = start;
    const endNodeKey = end;

    if (
      !this.adjacentList.has(startNodeKey) ||
      !this.adjacentList.has(endNodeKey)
    ) {
      throw new Error("Invalid start or end position");
    }

    const queue = [];
    const visited = {};
    const parentMap = {};

    visited[startNodeKey] = true;
    queue.push(startNodeKey);

    while (queue.length) {
      const node = queue.shift();
      const nodelist = this.adjacentList.get(node);

      if (node === endNodeKey) {
        const path = [];
        let curr = node;

        while (curr) {
          path.unshift(curr);
          curr = parentMap[curr];
        }
        return path;
      }

      for (const nodeEl of nodelist) {
        if (!visited[nodeEl]) {
          visited[nodeEl] = true;
          parentMap[nodeEl] = node;
          queue.push(nodeEl);
        }
      }
    }
  }
}

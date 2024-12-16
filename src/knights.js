import VERTICES from "./components/createVertices.js";
import getNeighbors from "./components/getNeighbors.js";

const DIMENSION = 8;

class Chessboard {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacentList = new Map();
  }

  addVertex(vertex) {
    this.adjacentList.set(vertex, new Set());
  }

  addEdges(vertV, vertU) {
    this.adjacentList.get(vertV).add(JSON.stringify(vertU));
    this.adjacentList.get(JSON.stringify(vertU)).add(vertV);
  }

  knightMoves(start, end) {
    const startNodeKey = JSON.stringify(start);
    const endNodeKey = JSON.stringify(end);

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

        path.unshift(node);
        while (curr) {
          path.unshift(parentMap[curr]);
          curr = parentMap[curr];
          if (curr === startNodeKey) {
            console.log(path);
            return path;
          }
        }
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

const board = new Chessboard(DIMENSION * DIMENSION);
const coordinateKeys = board.adjacentList.keys();

for (let i = 0; i < VERTICES.length; i++) {
  board.addVertex(VERTICES[i]);
}

for (const key of coordinateKeys) {
  const neighbors = getNeighbors(key);

  for (const neighbor of neighbors) {
    board.addEdges(key, neighbor);
  }
}
board.knightMoves([0, 0], [3, 3]);

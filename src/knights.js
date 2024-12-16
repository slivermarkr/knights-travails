import VERTICES from "./components/createVertices.js";
import getNeighbors from "./components/getNeighbors.js";
import stringToArr from "./components/stringToArr.js";

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
}
const board = new Chessboard(DIMENSION * DIMENSION);

for (let i = 0; i < VERTICES.length; i++) {
  board.addVertex(VERTICES[i]);
}

const coordinateKeys = board.adjacentList.keys();

for (const key of coordinateKeys) {
  const neighbors = getNeighbors(key);

  for (const neighbor of neighbors) {
    board.addEdges(key, neighbor);
  }
}
console.log(board.adjacentList);

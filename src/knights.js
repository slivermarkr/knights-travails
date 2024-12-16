import VERTICES from "./components/createVertices.js";

const DIMENSION = 8;

class Chessboard {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacentList = new Map();
  }
  addVertex(vertex) {
    this.adjacentList.set(vertex, new Set());
  }
  addEdges(vertV, vertU) {}
}
const board = new Chessboard(DIMENSION * DIMENSION);

for (let i = 0; i < VERTICES.length; i++) {
  // console.log(VERTICES[i]);
  board.addVertex(VERTICES[i]);
}
console.log(board.adjacentList);

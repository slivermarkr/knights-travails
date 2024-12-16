import Chessboard from "./knights.js";
import VERTICES from "./components/createVertices.js";
import getNeighbors from "./components/getNeighbors.js";

const board = new Chessboard();

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
board.knightMoves([0, 0], [7, 0]); // == [ '[0,0]', '[1,2]', '[2,4]', '[3,2]', '[5,1]', '[7,0]' ]
// board.knightMoves([5, 5], [7, 0]);// == [ '[5,5]', '[4,3]', '[5,1]', '[7,0]' ]
// board.knightMoves([0, 0], [3, 3]); // == [ '[0,0]', '[1,2]', '[3,3]' ]
// board.knightMoves([3, 3], [0, 0]); // == [ '[3,3]', '[1,2]', '[0,0]' ]

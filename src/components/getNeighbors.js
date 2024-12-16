import stringToArr from "./stringToArr.js";

export default function getNeighbors(vertex) {
  const neighbors = [];
  const [x, y] = stringToArr(vertex);
  // look at this horror masterpiece
  if (x - 1 >= 0 && y + 2 <= 7) {
    neighbors.push([x - 1, y + 2]);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    neighbors.push([x - 1, y - 2]);
  }
  if (x + 1 <= 7 && y + 2 <= 7) {
    neighbors.push([x + 1, y + 2]);
  }
  if (x + 1 <= 7 && y - 2 >= 0) {
    neighbors.push([x + 1, y - 2]);
  }
  if (x - 2 >= 0 && y + 1 <= 7) {
    neighbors.push([x - 2, y + 1]);
  }
  if (x - 2 >= 0 && y - 1 >= 0) {
    neighbors.push([x - 2, y - 1]);
  }
  if (x + 2 <= 7 && y + 1 <= 7) {
    neighbors.push([x + 2, y + 1]);
  }
  if (x + 2 <= 7 && y - 1 >= 0) {
    neighbors.push([x + 2, y - 1]);
  }
  return neighbors;
}

import stringToArr from "./stringToArr.js";

export default function getNeighbors(vertex) {
  const [x, y] = stringToArr(vertex);
  const knightsPossibleMove = [
    [1, 2],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [2, -1],
  ];
  return knightsPossibleMove
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([nx, ny]) => nx <= 7 && nx >= 0 && ny <= 7 && ny >= 0)
    .map((value) => value);
}

getNeighbors(JSON.stringify([0, 0]));

import stringToCoordinate from "./stringToArr.js";
import stringToArr from "./stringToArr.js";

// export default function getNeighbors(vertex) {
//   const [x, y] = stringToArr(vertex);
//   const knightsPossibleMove = [
//     [1, 2],
//     [-1, -2],
//     [-1, 2],
//     [1, -2],
//     [2, 1],
//     [-2, -1],
//     [-2, 1],
//     [2, -1],
//   ];
//   return knightsPossibleMove
//     .map(([dx, dy]) => [x + dx, y + dy])
//     .filter(([nx, ny]) => nx <= 7 && nx >= 0 && ny <= 7 && ny >= 0)
//     .map((value) => value); // }
// }
export default function getNeighbors(vertex) {
  const [x, y] = stringToCoordinate(vertex).map((coordinate) =>
    parseInt(coordinate)
  );
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
    .map((value) => "[" + value + "]");
}

// console.log(getNeighbors("[7,7]"));

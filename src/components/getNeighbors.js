import stringToArr from "./stringToArr.js";
export default function getNeighbors(vertex) {
  const [x, y] = stringToArr(vertex);
  console.log(x, y);
  // return stringToArr(vertex);
}

// console.log(getNeighbors("[0, 0]"));

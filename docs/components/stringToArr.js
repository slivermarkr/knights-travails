// export default function stringToArr(string) {
//   const n = string
//     .split("")
//     .filter((e) => /\d/.test(e))
//     .map((e) => parseInt(e));
//   return n;
// }
export default function stringToArr(string) {
  const n = string.slice(1, 4).split(",");
  return n;
}

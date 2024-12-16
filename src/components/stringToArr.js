export default function stringToArr(string) {
  const n = string
    .split("")
    .filter((e) => /\d/.test(e))
    .map((e) => parseInt(e));
  return n;
}

const DIMENSION = 8;
const vertices = [];

for (let i = 0; i < DIMENSION; i++) {
  for (let j = 0; j < DIMENSION; j++) {
    vertices.push(JSON.stringify([i, j]));
  }
}

export default vertices;
console.log(vertices);

const container = document.querySelector(".container");
const DIMENSION = 8;

let isOdd = true;
for (let i = DIMENSION - 1; i >= 0; i--) {
  console.log(isOdd);
  if (i % 2 === 1) {
    isOdd = false;
  } else {
    isOdd = true;
  }
  for (let j = 0; j < DIMENSION; j++) {
    const box = document.createElement("div");
    if (isOdd) {
      if (j % 2 === 1) {
        box.classList.add("dark");
      } else {
        box.classList.add("light");
      }
    } else {
      if (j % 2 === 1) {
        box.classList.add("light");
      } else {
        box.classList.add("dark");
      }
    }
    box.setAttribute("data-index", `[${j}, ${i}]`);
    box.classList.add("box");
    container.append(box);
  }
}

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("box")) return;
  const box = e.target;
  console.log(box.dataset.index);
  box.classList.add("selected");
  box.textContent = box.dataset.index;
  // document.querySelectorAll(".box").forEach((box) => {
  //   box.classList.remove("selected");
  // });
});

import board from "./main.js";

const container = document.querySelector(".container");
const btn = document.querySelector(".traverseBtn");
const resetBtn = document.querySelector(".resetBtn");
const result = document.querySelector(".result");
const moveCount = document.querySelector(".moveCount");
const message = document.querySelector(".message");
const DIMENSION = 8;
let myArr = undefined;

let isEven = true;
function renderBoard() {
  for (let i = DIMENSION - 1; i >= 0; i--) {
    if (i % 2 === 1) {
      isEven = false;
    } else {
      isEven = true;
    }
    for (let j = 0; j < DIMENSION; j++) {
      const box = document.createElement("div");
      if (isEven) {
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
      box.setAttribute("data-index", `[${j},${i}]`);
      box.classList.add("box");
      container.append(box);
    }
  }
}

renderBoard();

let isWaiting = false;
let start = undefined;
let end = undefined;
const startEl = document.querySelector(".start");
const endEl = document.querySelector(".end");

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("box")) return;
  if (myArr) {
    result.textContent = "Resetting...";
    setTimeout(anotherReset, 1000);
    return;
  }
  if (start && end) {
    result.textContent = "Resetting...";
    setTimeout(anotherReset, 1000);
    return;
  }
  const box = e.target;
  box.classList.add("selected");
  box.textContent = box.dataset.index;

  if (!isWaiting) {
    isWaiting = true;
    start = box.dataset.index;
    startEl.textContent = start;
  } else {
    isWaiting = false;
    end = box.dataset.index;
    endEl.textContent = end;
  }
  startEl.textContent = start;
  endEl.textContent = end;
});

btn.addEventListener("click", () => {
  if (end) {
    result.textContent = "";
    myArr = board.knightMoves(startEl.textContent, endEl.textContent);
    for (const i of myArr) {
      const el = document.createElement("p");
      el.textContent = i;
      result.append(el);
    }
    if (myArr.length <= 2) {
      moveCount.textContent = 1;
    } else {
      moveCount.textContent = myArr.length - 1;
    }
    message.style.display = "block";
    reset();
    pathHL(myArr);
  }
});

function reset() {
  container.textContent = "";
  isWaiting = false;
  end = false;
  renderBoard();
}

function pathHL(paths) {
  const els = paths.map((path) => {
    const elements = document.querySelector(`.box[data-index="${path}"]`);
    return elements;
  });
  els.forEach((element) => {
    element.textContent = element.dataset.index;
    element.style.color = "red";
  });
}

resetBtn.addEventListener("click", () => {
  anotherReset();
});

function anotherReset() {
  result.textContent = "";
  message.style.display = "none";
  myArr = undefined;
  startEl.textContent = "[_,_]";
  endEl.textContent = "[_,_]";
  end = undefined;
  start = undefined;
  reset();
}

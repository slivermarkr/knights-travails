import board from "./main.js";
import stringToArr from "./components/stringToArr.js";

const container = document.querySelector(".container");
const btn = document.querySelector(".traverseBtn");
const resetBtn = document.querySelector(".resetBtn");
const result = document.querySelector(".result");
const moveCount = document.querySelector(".moveCount");
const message = document.querySelector(".message");
const DIMENSION = 8;
let myArr = undefined;

let isOdd = true;
function renderBoard() {
  for (let i = DIMENSION - 1; i >= 0; i--) {
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
      box.setAttribute("data-index", `[${j},${i}]`);
      box.classList.add("box");
      container.append(box);
    }
  }
}

renderBoard();

let start = false;
let end = false;
const startEl = document.querySelector(".start");
const endEl = document.querySelector(".end");

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("box")) return;

  if (start && end) {
    console.log("reset");
  }

  const box = e.target;
  console.log(box.dataset.index);
  box.classList.add("selected");
  box.textContent = box.dataset.index;

  if (!start) {
    startEl.textContent = box.dataset.index;
    start = true;
    end = false;
  } else {
    endEl.textContent = box.dataset.index;
    start = false;
    end = true;
  }
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
  // startEl.textContent = "";
  // endEl.textContent = "";
  // message.textContent = "";
  // result.textContent = "";
  start = false;
  end = false;
  renderBoard();
}

function pathHL(paths) {
  const els = paths.map((path) => {
    const elements = document.querySelector(`.box[data-index="${path}"]`);
    console.log(elements.dataset.index);
    return elements;
  });
  console.log(els);
  els.forEach((element) => {
    element.textContent = element.dataset.index;
    element.style.color = "red";
  });
}

resetBtn.addEventListener("click", () => {
  console.log("hello");
  reset();
});

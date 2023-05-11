"use strict";

const area = document.querySelector(".container");
const fields = document.querySelectorAll(".option");
const restart = document.querySelector(".restart");

let step = false;
let count = 0;
const circle = `<svg class="circle">
<circle
  r="30"
  cx="50%"
  cy="50%"
  stroke="blue"
  stroke-width="10px"
  fill="none"
  stroke-linecap="round"
/>
</svg>`;
const cross = `<svg class="cross">
            <line
              class="first-line"
              x1="30%"
              y1="30%"
              x2="70%"
              y2="70%"
              stroke="yellow"
              stroke-width="10px"
              stroke-linecap="round"
            />
            <line
              class="second-line"
              x1="30%"
              y1="70%"
              x2="70%"
              y2="30%"
              stroke="yellow"
              stroke-width="10px"
              stroke-linecap="round"
            />
          </svg>`;

function stepCross(option) {
  option.innerHTML = cross;

  option.classList.add("x");

  count++;
}

function stepCircle(option) {
  option.innerHTML = circle;

  option.classList.add("o");

  count++;
}

function initGame(e) {
  if (!step) stepCross(e.target);
  else stepCircle(e.target);

  step = !step;

  winGame();
}

function newGame() {
  step = false;
  count = 0;

  fields.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("x", "o", "winner");
  });

  area.addEventListener("click", initGame);
}

function winGame() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      fields[winningCombinations[i][0]].classList.contains("x") &&
      fields[winningCombinations[i][1]].classList.contains("x") &&
      fields[winningCombinations[i][2]].classList.contains("x")
    ) {
      setTimeout(() => {
        fields[winningCombinations[i][0]].classList.add("winner");
        fields[winningCombinations[i][1]].classList.add("winner");
        fields[winningCombinations[i][2]].classList.add("winner");
      }, 500);
      area.removeEventListener("click", initGame);
    } else if (
      fields[winningCombinations[i][0]].classList.contains("o") &&
      fields[winningCombinations[i][1]].classList.contains("o") &&
      fields[winningCombinations[i][2]].classList.contains("o")
    ) {
      setTimeout(() => {
        fields[winningCombinations[i][0]].classList.add("winner");
        fields[winningCombinations[i][1]].classList.add("winner");
        fields[winningCombinations[i][2]].classList.add("winner");
      }, 500);
      area.removeEventListener("click", initGame);
    } else if (count === 9) {
      count = 0;
      alert("There is no winner");
      area.removeEventListener("click", initGame);
    }
  }
}

area.addEventListener("click", initGame);
restart.addEventListener("click", newGame);

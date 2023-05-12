import shapes from "./shapes.js";
import { winningCombinations, results } from "./win-combination.js";

const area = document.querySelector(".container");
const fields = document.querySelectorAll(".option");
const restart = document.querySelector(".restart");
const btnNewGame = document.querySelector(".new-game");
const popup = document.querySelector(".popup");
const result = document.querySelector(".result");
const message = document.querySelector(".message");

let step = false;
let count = 0;

const { circle, cross } = shapes;
const { nowin, winx, wino } = results;

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
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

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

  result.innerHTML = "";
  popup.classList.add("hide");
  area.addEventListener("click", initGame);
}

function winGame() {
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

      result.innerHTML = winx;
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

      result.innerHTML = wino;
      area.removeEventListener("click", initGame);
    } else if (count === 9) {
      count = 0;

      message.innerHTML = nowin;
      popup.classList.remove("hide");
      area.removeEventListener("click", initGame);
    }
  }
}

area.addEventListener("click", initGame);
restart.addEventListener("click", newGame);
btnNewGame.addEventListener("click", newGame);

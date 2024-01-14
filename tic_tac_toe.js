let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let hide = document.querySelector(".hide");
let winTieText = document.getElementById("win-tie");
let newBtn = document.getElementById("newBtn");

let playerO = true;
let clickCount = 0;
let isTie = true;

let winnerValue = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  playerO = true;
  enableBoxes();
  hide.classList.add("hide");
  resetBtn.classList.remove("hide");
  clickCount = 0;
};
const gameTie = () => {
  hide.classList.remove("hide");
  winTieText.innerText = `Game is Tie`;
  disableBoxes();
};

const hideResetBtn = () => {
  resetBtn.classList.add("hide");
};

const showWinner = (winVal) => {
  hide.classList.remove("hide");
  winTieText.innerText = `Winner is ${winVal}`;
  disableBoxes();
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
      box.style.color = "#00FFFF";
      clickCount++;
    } else {
      box.innerText = "X";
      box.style.color = "deeppink";
      playerO = true;
      clickCount++;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winnerValue) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
        hideResetBtn();
        isTie = false;
      } else if (clickCount == 9 && isTie == true) {
        gameTie();
        hideResetBtn();
      }
    }
  }
};

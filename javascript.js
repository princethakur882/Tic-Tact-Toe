let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".NewGame");
let showwin = document.querySelector(".show-winner");

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turn = true;
  enableboxes();
  showwin.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      box.classList.add("OColor");
      turn = false;
    } else {
      box.innerText = "X";
      box.classList.add("XColor");
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("OColor", "XColor");
  }
};

const showwiner = (winner) => {
  showwin.innerText = `Congratulations, Winner is ${winner}`;
  showwin.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwiner(pos1Val);
      }
    }
  }
};

reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);

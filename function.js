console.log("Welcome to TikTakToe Console");
let winAudio = new Audio("WinAudio.mp3");
// let backgroundAudio = new Audio("") ;
let clickAudio = new Audio("clickAudio.mp3");
let turn = "X";
let gameOver = false;

// Turn Fuction
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Win Function
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".turn").innerText =
        "The Winner is: " + boxtext[e[0]].innerText;
      gameOver = true;
      winAudio.play();
      document.querySelector(".winImg").style.width = "20vw";
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      clickAudio.play();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn for: " + turn;
      }
    }
  });
});

//   Restart function
restart.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxText");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("turn")[0].innerText = "Turn for: " + turn;
  document.querySelector(".winImg").style.width = "0vw";
});

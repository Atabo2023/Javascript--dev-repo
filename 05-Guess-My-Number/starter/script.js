"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "✔ correct Number!";

// document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// TUTORIAL 73 HANDLING CLICK EVENTS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //  WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";

    displayMessage("No number!");

    // WHEN THE PRAYER WIN
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "✔ Correct number!";

    displayMessage("✔ Correct number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //  WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "🙌Too high!" : "🙌Too low!";

      displayMessage(guess > secretNumber ? "🙌Too high!" : "🙌Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "🎉You lost the game!";

      displayMessage("🎉You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //  WHEN GUESS IS TOO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🙌Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🎉You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //  WHEN GUESS IS TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🙌Too low!";
  //     score--;

  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🎉You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// #CHALLENGE  #1 FOR PROJECT #1

// impplement a game rest fanality, so that the palyer can make a new guess! here is how:

// 1. Select the element with the "again" class and attach a click event handler

// 2. in the handler function, restore initial values of the score and secretnNumber variable

// 3. Restore the initial conditions of the message, number, score and guess input field

// 4. Also restore the original background (#222) and number width (15rem)

// SOLUTION TO THE #CHALLENGE #1

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".ssguess").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});

// # PROJECT 2 (MODAL WINDOW)

"use strict";

// #SELECTING ELEMENT
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// STARTING CONDITION
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//  THE ROLLING DICE FUNCTIONALITY (#TUTORIAL 85)
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. GENERATING A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. CHECK FOR ROLLED 1: IF TRUE, SWITCH TO NEXT PLAYER
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice; // (currentScore = currentScore + dice);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switvh to the players
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. ADD CURREPNT SCORE TO ACTIVE PLAYER'S SCORE
    scores[activePlayer] += currentScore; // (scores[1] = scre[1] + currentScore)

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.CHECK IF PLAYER'S SCORE IS >= 100
    if (scores[activePlayer] >= 100) {
      // FINISH THE GAME
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      // SWICH TO THE NEXT PLAUYER
      switchPlayer();
    }
  }
});

// TUTORIAL #86
// RESETTING THE GAME #CHALLENGE 3

btnNew.addEventListener("click", init);

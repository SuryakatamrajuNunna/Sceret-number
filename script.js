'use strict';
/*
console.log(document.querySelector('.between').textContent);

document.querySelector('.between').textContent =
  '😄 The numbers are not always between 1 and 20 🚨';
console.log(document.querySelector('.between').textContent);

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

let sceretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
console.log(sceretNumber);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);
  if (!guessInput) {
    document.querySelector('.message').textContent = 'Please enter a number🚨';
  }
  if (score > 0) {
    if (guessInput < sceretNumber) {
      document.querySelector('.message').textContent =
        'Lessthan the sceret number';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#c41515';
    } else if (guessInput > sceretNumber) {
      document.querySelector('.message').textContent =
        'greaterthan the sceret number';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#808681';
    } else {
      document.querySelector('.message').textContent =
        'The sceret number is the right one';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent = '😔 lost the game 🥹';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing';
  sceretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#c41515';
});

'use strict';

let secretNumber = Math.trunc(Math.random() * 20);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Funcion para revisar si el numero es el correcto
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Cuando no hay numero
  if (!guess) {
    displayMessage('🛑 No number!');

    //Cuando el Jugador Ganó
  } else if (guess === secretNumber) {
    //Cuando Ganas!
    displayMessage('🎊Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Cuando el numero es muy alto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Muy alto!' : '📉Muy bajo!');
      score--;
      document.querySelector('.score').textContent = score;
      console.log(score);
    } else {
      displayMessage('😭 Perdiste el juego!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Funcion Reset
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20);
  score = 20;
  displayMessage('Empienza a adivinar😉...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

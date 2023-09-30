const scoreElement = document.getElementById('score');
const smurf = document.getElementById('smurf1');

let score = 0;

smurf.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    smurf.style.display = 'none';

});
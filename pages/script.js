const scoreElement = document.getElementById('score');

const smurfIds = ['smurf1', 'smurf2', 'smurf3', 'smurf4', 'smurf5', 'smurf6'];

let score = 0;

for (const smurfId of smurfIds) {
    const smurf = document.getElementById(smurfId);

    smurf.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score;
        smurf.style.display = 'none';
    });
}
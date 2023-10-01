var timeLeft = 60;
var score = 0; // Initial score

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    document.getElementById("time").innerHTML = `0${minutes}:${seconds.toString().padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft == 0 || timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("time").innerHTML = "00:00";
        endGame(document.getElementById("score").innerHTML);
    }
}

updateTimer();

const interval = setInterval(updateTimer, 1000);

function endGame(finalScore) {
    window.location.href = "results.html?score=" + finalScore;
}

// Event Listener for characters
document.querySelectorAll('img[data-type="smurf"], img[data-type="azrael"]').forEach(character => {
    character.addEventListener('click', function() {
        if (this.getAttribute('data-type') === "smurf") {
            score++;  // Increase the score
            document.getElementById("score").innerHTML = score;  // Update the score display
        } else if (this.getAttribute('data-type') === "azrael") {
            timeLeft -= 10;  // Deduct 10 seconds
            if (timeLeft < 0) timeLeft = 0; // Ensure we don't go negative
            updateTimer(); // Immediately reflect the deduction on the timer
        }
        this.style.visibility = 'hidden';  // Make the character disappear
    });
});

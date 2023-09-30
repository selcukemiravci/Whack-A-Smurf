var timeLeft = 60;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("time").innerHTML = `0${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timeLeft--;

  if (timeLeft == 0 || timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("time").innerHTML = "00:00";
    endGame(document.getElementById("score").innerHTML);
  }
}

updateTimer();

// Update the timer every second (1000ms)
const interval = setInterval(updateTimer, 1000);

function endGame(score) {
  window.location.href = "results.html?score=" + score;
}

function reduceTime() {
  timeLeft--;
  document.getElementById("time").innerHTML = `00:${timeLeft
    .toString()
    .padStart(2, "0")}`;
}

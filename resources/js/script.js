var timeLeft = 60;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("time").innerHTML = `0${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("time").innerHTML = "0:00";
    // Add end of game logic
  }
}

updateTimer();

// Update the timer every second (1000ms)
const interval = setInterval(updateTimer, 1000);

var timeLeft = 60;
var score = 0;
const spawnInterval = 1500;
const displayTime = 1000;
const holes = document.querySelectorAll('.grid-item .mole-hole-middle');
const smurfTypes = [
  '../resources/images/smurf.png',
  '../resources/images/smurfette.png',
  '../resources/images/papa-smurf.png'
];
let smurfsToShow = [...smurfTypes];

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    document.getElementById("time").innerHTML = `0${minutes}:${seconds.toString().padStart(2, "0")}`;
    timeLeft--;

    if (timeLeft == 0 || timeLeft < 0) {
        clearInterval(interval);
        clearInterval(spawnCharacterInterval);
        document.getElementById("time").innerHTML = "00:00";
        endGame(document.getElementById("score").innerHTML);
    }
}

function endGame(finalScore) {
    window.location.href = "results.html?score=" + finalScore;
}

function spawnMultipleCharacters() {
  // Determine how many characters to spawn (between 1 and 3 for example)
  const numToSpawn = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < numToSpawn; i++) {
      spawnCharacter();
  }
}

function spawnCharacter() {
  // Randomly select a hole
  let randomHoleIndex = Math.floor(Math.random() * holes.length);
  let chosenHole = holes[randomHoleIndex];
  let chosenImage;
  const isAzrael = Math.random() < 0.2; // Adjust for desired Azrael probability

  if (isAzrael || smurfsToShow.length === 0) {
      chosenImage = isAzrael ? '../resources/images/azrael.png' : smurfTypes[Math.floor(Math.random() * smurfTypes.length)];
  } else {
      const randomIndex = Math.floor(Math.random() * smurfsToShow.length);
      chosenImage = smurfsToShow[randomIndex];
      smurfsToShow.splice(randomIndex, 1);
  }

  chosenHole.src = chosenImage;
  chosenHole.setAttribute('data-type', isAzrael ? 'azrael' : 'smurf');
  chosenHole.style.visibility = 'visible';

  setTimeout(() => {
      chosenHole.style.visibility = 'hidden';
  }, Math.random() * 2000 + 1000);
}


document.querySelectorAll('img[data-type="smurf"], img[data-type="azrael"]').forEach(character => {
    character.addEventListener('click', function() {
        if (this.getAttribute('data-type') === "smurf") {
            score++;
            document.getElementById("score").innerHTML = score;
        } else if (this.getAttribute('data-type') === "azrael") {
            timeLeft -= 10;
            if (timeLeft < 0) timeLeft = 0;
            updateTimer();
        }
        this.style.visibility = 'hidden';
    });
});

updateTimer();
const interval = setInterval(updateTimer, 1000);
const spawnCharacterInterval = setInterval(spawnMultipleCharacters, spawnInterval);

document.querySelectorAll('img[data-type="smurf"], img[data-type="azrael"]').forEach(character => {
  character.addEventListener('click', function() {
      if (this.getAttribute('data-type') === "smurf") {
          document.getElementById("smurfsAudio").play(); // play smurfs audio
          // ... rest of your smurf click logic
      } else if (this.getAttribute('data-type') === "azrael") {
          document.getElementById("azraelAudio").play(); // play azrael audio
          // ... rest of your azrael click logic
      }
      this.style.visibility = 'hidden';
  });
});

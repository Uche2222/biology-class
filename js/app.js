/* ============================
   BIOKIDS INTERACTIVE SCRIPT
=============================*/

// -----------------------------
// AUDIO SETUP
// -----------------------------
const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");
const narrationSound = document.getElementById("narrationSound");

// helper function to play sounds
function playSound(sound) {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// -----------------------------
// BUTTON CLICK SOUNDS
// -----------------------------
const allButtons = document.querySelectorAll("button");

allButtons.forEach(button => {
  button.addEventListener("click", () => {
    playSound(clickSound);
  });
});

// -----------------------------
// START LEARNING BUTTON
// -----------------------------
const startBtn = document.getElementById("startLearningBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    alert("Welcome to BioKids! 🌈 Let’s start learning!");
    playSound(narrationSound);
  });
}

// -----------------------------
// QUIZ LOGIC
// -----------------------------
const quizButtons = document.querySelectorAll(".quiz-btn");
let stars = localStorage.getItem("stars") || 0;

quizButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.textContent.trim();

    if (answer === "Yes") {
      playSound(successSound);
      alert("Correct! 🌟 Plants need water to grow.");

      stars++;
      localStorage.setItem("stars", stars);
      updateStars();
    } else {
      playSound(errorSound);
      alert("Oops! ❌ Try again. Think about plants and water.");
    }
  });
});

// -----------------------------
// UPDATE PROGRESS STARS
// -----------------------------
function updateStars() {
  const starContainer = document.querySelector(".stars");
  if (!starContainer) return;

  let starDisplay = "";
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starDisplay += "⭐ ";
    } else {
      starDisplay += "☆ ";
    }
  }

  starContainer.textContent = starDisplay;
}

// load stars on page load
updateStars();

// -----------------------------
// MODULE CARD INTERACTION
// -----------------------------
const moduleCards = document.querySelectorAll(".module-card");

moduleCards.forEach(card => {
  card.addEventListener("click", () => {
    playSound(clickSound);

    const topic = card.querySelector("h3").textContent;
    alert(`Great choice! 🎉 Let's learn about ${topic}!`);
  });
});

// -----------------------------
// GAME BUTTON (PLACEHOLDER)
// -----------------------------
const gameButton = document.querySelector(".games .primary-btn");

if (gameButton) {
  gameButton.addEventListener("click", () => {
    playSound(clickSound);
    alert("🎮 Game coming soon! Keep learning!");
  });
}

// -----------------------------
// NAVIGATION BUTTON FEEDBACK
// -----------------------------
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    playSound(clickSound);
    alert(`You clicked on ${btn.textContent}!`);
  });
});

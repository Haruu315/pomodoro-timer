const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let time = 25 * 60;
let interval = null;

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timer.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

startButton.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    time--;
    updateTimer();

    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      alert("終了！");
    }
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  time = 25 * 60;
  updateTimer();
});
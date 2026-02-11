const timer = document.getElementById("timer");
const startButton = document.getElementById("start");

let time = 25 * 60; // 25分
let interval;

startButton.addEventListener("click", () => {
    interval = setInterval(() => {
        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

        if (time <= 0) {
            clearInterval(interval);
            alert("終了！");
        }
    }, 1000);
});
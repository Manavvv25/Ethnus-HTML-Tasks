let train = document.getElementById("train");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let position = 0;
let interval;

function moveTrain() {
    if (position >= window.innerWidth - train.width) {
        position = 0;
    }
    position += 5;
    train.style.left = position + "px";
}

startButton.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(moveTrain, 50);
});

stopButton.addEventListener("click", function() {
    clearInterval(interval);
});

// Two things that our program do:
// 1- Display the timer
// 2- Shows an animated border around the timer

const duration = document.querySelector("#duration");
const start = document.querySelector("#startButton");
const pause = document.querySelector("#pauseButton");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let fullDuration;

const timer = new Timer(duration, start, pause, {
  onStart(totalDuration) {
    console.log("Time started!");
    fullDuration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / fullDuration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed!");
  },
});

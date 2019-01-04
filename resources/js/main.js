let positions = [14, 22, 30, 38, 46, 54, 62, 70, 78];
let target = document.getElementById("position");
let score = document.getElementById("score");
let reset = document.querySelector("button");
let timeElement = document.getElementById("time");
let timeRemaining = 30;
let counter = 0;
let gunshot = document.querySelector("audio");


function callRandom() {
  return Math.floor(Math.random() * 9);
}

let timer = setInterval(function() {
  timeElement.textContent = timeRemaining--;
  console.log(timeRemaining);
  if (timeRemaining < 0) {
    if (counter > 20) {
        alert("YOU WIN!");
      } else {
        alert("LOSER!");
      }
    clearInterval(timer);
  }
}, 1000);


setInterval(() => {
  target.style.left = `${positions[callRandom()]}vw`;
  console.log(positions[callRandom()]);
}, 800);

score.textContent = counter;

target.addEventListener("click", event => {
  score.textContent = counter;
  counter++;
  gunshot.play();
});

reset.addEventListener("click", event => {
    location.reload();
});

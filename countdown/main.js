let time = +document.getElementById("time").innerText;
let countDownDate = new Date(new Date().getTime() + time * 60 * 1000).getTime();

let interval = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "00:00";
  }
}, 1000);

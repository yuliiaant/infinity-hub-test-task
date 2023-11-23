const TIMER = 10;
const dateToday = new Date();
const deadlineTime = dateToday.setMinutes(
  dateToday.getMinutes() + TIMER
);

const countdown = setInterval(function () {
  const dateNow = new Date().getTime();
  const timeLeft = deadlineTime - dateNow;
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("deadline-timer").innerHTML = minutes + ":" + seconds;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("deadline-timer").innerHTML = "00:00";
  }
}, 1000);

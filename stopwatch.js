let intervalId;

let seconds = 0;
let tenSeconds = 0;
let minutes = 0;
let tenMinutes = 0;

const startButton = document.querySelector('.start-button-js');
const stopButton = document.querySelector('.stop-button-js');
const resetButton = document.querySelector('.reset-button-js');

const timerElement = document.querySelector('.timer-js');

const tenMinutesElement = document.querySelector('.ten-minutes-js');
const minutesElement = document.querySelector('.minutes-js');
const tenSecondsElement = document.querySelector('.ten-seconds-js');
const secondsElement = document.querySelector('.seconds-js');

stopButton.disabled = true;

  startButton.addEventListener('click', () => {
    timer();
    buttonDisabler(false,true);
  });

  stopButton.addEventListener('click', () => {
    stopper();
  });

  resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    secondsElement.innerHTML = `${seconds = 0}`;
    tenSecondsElement.innerHTML = `${tenSeconds = 0}`;
    minutesElement.innerHTML = `${minutes = 0}`;
    tenMinutesElement.innerHTML = `${tenMinutes = 0}`;
    buttonDisabler(true,false);
  });

  function buttonDisabler (start,stop) {
    startButton.disabled = !start;
    stopButton.disabled = !stop;
  }

  function timer () {
    intervalId = setInterval(() => {
      seconds++;
      secondsElement.innerHTML = `${seconds}`;
      if(seconds == 10) {
        seconds = 0;
        secondsElement.innerHTML = `${seconds}`;
        tenSeconds++;
        tenSecondsElement.innerHTML = `${tenSeconds}`;
      }
      if(tenSeconds == 6) {
        tenSeconds = 0;
        tenSecondsElement.innerHTML = `${tenSeconds}`;
        minutes++;
        minutesElement.innerHTML = `${minutes}`;
      }
      if(minutes == 10) {
        minutes = 0;
        minutesElement.innerHTML = `${minutes}`
        tenMinutes++;
        tenMinutesElement.innerHTML = `${tenMinutes}`;
      }
      if(tenMinutes == 6) {
        stopper();
        startButton.disabled = true;
      }
    }, 1000);
  }

  function stopper () {
    clearInterval(intervalId);
    buttonDisabler(true,false);
  }
  
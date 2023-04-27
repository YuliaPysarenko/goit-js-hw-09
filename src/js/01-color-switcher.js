
const buttonStart = document.querySelector(`[data-start]`);
const buttonStop = document.querySelector(`[data-stop]`);
let intervalId = null;

buttonStart.addEventListener(`click`, onButtonStart);
buttonStop.addEventListener(`click`, onButtonStop);

buttonStop.setAttribute(`disabled`, true);

function onButtonStart() {
  buttonStop.removeAttribute(`disabled`);
  buttonStart.setAttribute(`disabled`, true);
  
    intervalId = setInterval(() => {
      const getRandomHexColorAndText = getRandomHexColor();
      document.body.style.backgroundColor = getRandomHexColorAndText;
    }, 1000);
}

function onButtonStop() {
 if (onButtonStart) {
   clearInterval(intervalId);

  buttonStop.setAttribute(`disabled`, true);
  buttonStart.removeAttribute(`disabled`);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}





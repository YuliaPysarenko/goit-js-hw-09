
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.querySelector(`#datetime-picker`);
const startButton = document.querySelector(`[data-start]`);
 const allTimer = document.querySelector(`.timer`);

const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMinutes = document.querySelector(`[data-minutes]`);
const dataSeconds = document.querySelector(`[data-seconds]`);

startButton.addEventListener(`click`, onButtonStart);
startButton.setAttribute(`disabled`, true);
 
 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
   minuteIncrement: 1,
 minDate: "today",
  onClose(selectedDates) {
    console.log(selectedDates[0]);
      if (!selectedDates.length) {
      window.alert("Please choose a date in the future");
    } else {
      startButton.removeAttribute(`disabled`);
    }
  },
};

flatpickr("#datetime-picker", options);

// flatpickr("#datetime-picker",  {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   minDate: "today",
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//       if (!selectedDates.length) {
//       window.alert("Please choose a date in the future");
//     } else {
//       startButton.removeAttribute(`disabled`);
//     }
//   },
// });


const timers = {
  intervalId: null,
  isActive: false,
 
  start() {
    if (this.isActive) {
      return;
    }
    // const currentData = Date.now();
    // const currentTime = Date.now();options.selectedDates
    const currentTime = new Date(options.selectedDates).getTime();
    
    this.isActive = true;

    
    this.intervalId = setInterval(() => { 
      const futureTime = new Date();
      const deltaTime =  currentTime - futureTime;
      const time = convertMs(deltaTime);
       updateTimer(time);
      
      // const futureTime = Date.now(`Junuary 01 ${currentData + 1} 00:00:00` );
      // const deltaTime =  futureTime - currentTime;
      // const time = convertMs(deltaTime);
      //  updateTimer(time);
      
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
}


function onButtonStart() {
 timers.start(); 
}

function updateTimer({days, hours, minutes, seconds }) {
 dataDays.innerText = days;
 dataHours.innerText = hours;
 dataMinutes.innerText = minutes;
 dataSeconds.innerText = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
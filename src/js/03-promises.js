import LodashThrottle from "lodash.throttle";

//  form.addEventListener(`submit`, createPromise);
//  form.addEventListener(`input`, LodashThrottle(onAllForm,amountValue)); 


const form = document.querySelector(`.form`);
// const inputStepForm = document.querySelector(`.step`);
// const inputDelayForm = document.querySelector(`.delay`);
// const inputAmountForm = document.querySelector(`.amount`);


let positions = 0;

let ObjectForm = {
  delay: '',
  step: '',
  amount: '',
};

const amountValue = form.elements.amount.value = ObjectForm.amount;
const delayValue =  form.elements.delay.value = ObjectForm.delay;
const stepValue = form.elements.step.value = ObjectForm.step;
const delays = delayValue + stepValue;

form.addEventListener(`submit`, LodashThrottle(createPromise,  amountValue));


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay })
        // Reject
      }
    }, delays);
  });
}

createPromise(positions, delays)
  .then(fulfilledPromise)
  .catch(rejectedPromise);

function fulfilledPromise({ position, delay}) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function rejectedPromise({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//         // Fulfill
//       } else {
//         reject({ position, delay })
//         // Reject
//       }
//     }, delays);
//   });
// }

// createPromise(positions, delays)
//   .then(fulfilledPromise)
//   .catch(rejectedPromise);

// function fulfilledPromise({ position, delay}) {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }

// function rejectedPromise({ position, delay }) {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setInterval(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//         // Fulfill
//       } else {
//         reject({ position, delay })
//         // Reject
//       }
//     }, amountValue);

//     setTimeoutPromise();
//   });
// }


// function setTimeoutPromise() {
//   setTimeout(() => {
//     positions += 1;
//   }, delays);
// }

// createPromise(positions, delays)
//   .then(fulfilledPromise)
//   .catch(rejectedPromise);

// function fulfilledPromise({ position, delay}) {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }

// function rejectedPromise({ position, delay }) {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// }
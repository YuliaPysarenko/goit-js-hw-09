const form = document.querySelector(`.form`);
form.addEventListener(`sabmit`, onSabmitForm);


let position = 0;
let delay = 0;

function onSabmitForm(evt) {
  evt.preventDefault();

  const data = {
  position: ``,
  delay: ``,
  }
  
  // Варіант 1
   const stepForm = form.elements.step.value;
  for (let i = 0; i === evt.target.form; i += stepForm) {

    position = form.elements.amount.value;
    delay = form.elements.delay.value;
  
    console.log(position, delay);
  }
 
  // Варіант2
  
  // const stepForm = form.elements.step.value;
  //  position = form.elements.amount.value = data.position;
  //  delay = form.elements.delay.value = data.delay;

  // for (let i = 0; i === position && i === delay; i += stepForm) {
  //        createPromise(position, delay);
  //     }

  
  //  for (let i = 0; i === form.elements.delay.value && i === form.elements.step.value && i === form.elements.amount.value; i += step) {
  //   createPromise(position, delay);
  //     }

  // for (let i = 0; i === evt.target.delay && i === evt.target.step && i === evt.target.amount; i += step) {
  //   // createPromise(position, delay);
  //  createPromise({position: data.position, delay: data.delay});
  //     }

}

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
   }, delay);
//   if (position <= amount) {
//     clearInterval(idSetInterval)
//     return;
//     }
//     position += 1;
  });
}

// const idSetInterval = setInterval(createPromise, 10);

createPromise( position, delay )
  .then(fulfilledPromise)
  .catch(rejectedPromise);

function fulfilledPromise( {position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function rejectedPromise({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}



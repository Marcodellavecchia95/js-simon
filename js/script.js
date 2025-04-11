const instructionsElement = document.getElementById("instructions");
const numbersListElement = document.getElementById("numbers-list");
const answersElement = document.getElementById("answers-form");
const triggerButtonElement = document.getElementById("trigger-button");
const inputNumbersElement = document.getElementById("input-group");
const finalMessageElement = document.getElementById("message");
const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomNumbersArray = [
  randomNumberGenerator(1, 50),
  randomNumberGenerator(1, 50),
  randomNumberGenerator(1, 50),
  randomNumberGenerator(1, 50),
  randomNumberGenerator(1, 50),
];
// FUNZIONE GENERA NUMERI

setTimeout(() => {
  instructionsElement.classList.add("d-none");

  for (let i = 0; i < randomNumbersArray.length; i++) {
    numbersListElement.innerHTML += `<li>${randomNumbersArray[i]}</li>`;
  }

  if (instructionsElement.classList.contains("d-none")) {
    setTimeout(() => {
      numbersListElement.classList.add("d-none");
      answersElement.classList.remove("d-none");
    }, 5000);
  }
}, 4000);

triggerButtonElement.addEventListener("click", (event) => {
  event.preventDefault();

  const userNumbers = inputNumbersElement.querySelectorAll("input");
  let userArray = [];
  let resultsArray = [];

  for (let i = 0; i < userNumbers.length; i++) {
    let userNumberOutput = parseInt(userNumbers[i].value);
    userArray.push(userNumberOutput);
  }

  for (let i = 0; i < randomNumbersArray.length; i++) {
    if (randomNumbersArray[i] === userArray[i]) {
      resultsArray.push(userArray[i]);
    }

    if (resultsArray.length >= 3) {
      finalMessageElement.innerText = `Complimenti hai indovinato ${resultsArray.length} numeri: (${resultsArray})`;
    } else if (resultsArray.length < 3 && resultsArray.length != 0) {
      finalMessageElement.innerText = `Peccato, hai indovinato solo ${resultsArray.length} numeri: (${resultsArray})`;
    } else {
      finalMessageElement.innerText = `Mi spiace, non hai indovinato nessun numero`;
    }
  }
});

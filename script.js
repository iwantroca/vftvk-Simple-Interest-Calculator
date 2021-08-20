const floatingInput = document.createElement("p");
const rateLabel = document.querySelector("#rate");
const principalInput = document.querySelector("#principal");
const ratePara = rateLabel.lastElementChild;
const timeSelector = document.querySelector("#time");
const computeButton = document.querySelector("button");
const result = document.querySelector("#result");
const currentYear = new Date().getFullYear();
const para = document.createElement("p");
let principalValue = 0;
let interestRate = 0;
let timePeriodValue = 1;
let interestValue = 0;
let finalAmount = 0;
let resultText = "";

function calculateInterest() {
  interestValue = (principalValue * interestRate * timePeriodValue) / 100;
  interestValue = interestValue.toFixed(4);
  interestValue = Number(interestValue);
  finalAmount = principalValue + interestValue;
  console.log(finalAmount);
  return finalAmount;
}

principalInput.addEventListener("keyup", (e) => {
  principalValue = e.target.value;
  console.log(principalValue);
  para.textContent = "";
});
rateLabel.addEventListener("click", (e) => {
  interestRate = e.target.value;
  ratePara.textContent = `${interestRate}%`;
  console.log(interestRate);
});
timeSelector.addEventListener("click", (e) => {
  timePeriodValue = Number(e.target.value);
  console.log(timePeriodValue);
});
computeButton.addEventListener("click", () => {
  calculateInterest();

  if (para.textContent == "") {
    resultText = `If you deposit <span id='highlight'>${principalValue}</span><br>
  at an interest of <span id='highlight'>${interestRate}</span><br>
  You will recieve an amount of <span id='highlight'>${finalAmount}</span><br>
  in the year <span id='highlight'>${currentYear + timePeriodValue}</span>.`;
  }

  para.innerHTML = resultText;
  computeButton.parentElement.appendChild(para);
  console.log(para);
});

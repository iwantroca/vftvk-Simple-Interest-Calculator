const floatingInput = document.createElement("p");
const rateLabel = document.querySelector("#rate");
const ratePara = rateLabel.lastElementChild;

rateLabel.addEventListener("click", (e) => {
  let value = e.target.value;
  floatingInput.textContent = value;
  ratePara.textContent = `${value}%`;
});

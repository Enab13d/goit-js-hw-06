// Alternate solution
// const inputEl = document.querySelector("#validation-input");
// const onInputElBlurValid = event => {
//     inputEl.value.length < inputEl.dataset.length
//     ? event.currentTarget.classList.remove("valid")
//     : event.currentTarget.classList.add("valid");
// }
// const onInputElBlurInvalid = event => {
//     inputEl.value.length < inputEl.dataset.length
//     ? event.currentTarget.classList.add("invalid")
//     : event.currentTarget.classList.remove("invalid");
// }
// inputEl.addEventListener("blur", onInputElBlurValid);
// inputEl.addEventListener("blur", onInputElBlurInvalid);

const inputEl = document.querySelector("#validation-input");
const onInputElBlur = function (event) {
  if (inputEl.value.length < inputEl.dataset.length) {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
};
inputEl.addEventListener("blur", onInputElBlur);

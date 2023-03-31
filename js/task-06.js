// Alternate solution
// const inputEl = document.querySelector("#validation-input");
// const onInputElBlurValid = event => {
//     inputEl.value.length === Number(inputEl.dataset.length)
//     ? event.currentTarget.classList.add("valid")
//     : event.currentTarget.classList.remove("valid");
// }
// const onInputElBlurInvalid = event => {
//     inputEl.value.length === Number(inputEl.dataset.length)
//     ? event.currentTarget.classList.remove("invalid")
//     : event.currentTarget.classList.add("invalid");
// }
// inputEl.addEventListener("blur", onInputElBlurValid);
// inputEl.addEventListener("blur", onInputElBlurInvalid);

const inputEl = document.querySelector("#validation-input");
const onInputElBlur = function (event) {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
};
inputEl.addEventListener("blur", onInputElBlur);

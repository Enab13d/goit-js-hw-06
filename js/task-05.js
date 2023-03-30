const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputElInput = (event) => {
  event.currentTarget.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", onInputElInput);

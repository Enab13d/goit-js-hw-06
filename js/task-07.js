const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onInputElChange = (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};
inputEl.addEventListener("change", onInputElChange);

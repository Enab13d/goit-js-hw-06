function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const valueSetBtn = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");
let height = 30;
let width = 30;

const createBoxes = (amount) => {
  amount = valueSetBtn.value;
  const markup = [];
  for (let i = 0; i < amount; i++) {
    const innerContainer = document.createElement("div");
    innerContainer.style.height = `${width}px`;
    innerContainer.style.width = `${height}px`;
    innerContainer.style.backgroundColor = getRandomHexColor();
    height += 10;
    width += 10;
    markup.push(innerContainer);
  }
  boxesContainer.append(...markup);
};
createBtn.addEventListener("click", createBoxes);
const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
  height = 30;
  width = 30;};
destroyBtn.addEventListener("click", destroyBoxes);

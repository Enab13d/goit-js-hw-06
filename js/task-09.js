function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBgColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const displayColor = document.querySelector("span.color");
const onBtnClick = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  displayColor.textContent = color;
};
changeBgColorBtn.addEventListener("click", onBtnClick);

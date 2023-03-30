function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBgColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const onBtnClick = () => (bodyEl.style.backgroundColor = getRandomHexColor());
changeBgColorBtn.addEventListener("click", onBtnClick);

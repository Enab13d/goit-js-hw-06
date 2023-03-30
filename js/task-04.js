const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let value = counterValue.textContent;
value = 0;
const onIncrementBtnClick = () => (counterValue.textContent = value += 1);
const onDecrementBtnClick = () => (counterValue.textContent = value -= 1);
decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

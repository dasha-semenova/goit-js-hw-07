const body = document.querySelector("body");
const button = document.querySelector(".change-color");
let spanColor = document.querySelector(".color");
spanColor.textContent = getComputedStyle(body).backgroundColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  const RandomColor = getRandomHexColor();
  document.body.style.backgroundColor = RandomColor;
  spanColor.textContent = RandomColor;
});
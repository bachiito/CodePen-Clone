const mainSection = document.querySelector("main");
const codeSection = document.querySelector(".code");
const changeViewBtn = document.querySelector(".change-view");
const inputs = document.querySelectorAll("textarea");

changeViewBtn.addEventListener("click", changeLayout);

inputs.forEach(input => input.addEventListener("", newLine));

function changeLayout() {
  mainSection.classList.toggle("vertical-layout");
  codeSection.classList.toggle("sidebar");
}

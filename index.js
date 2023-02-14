const mainSection = document.querySelector("main");
const codeSection = document.querySelector(".code");
const changeViewBtn = document.querySelector(".change-view");

changeViewBtn.addEventListener("click", changeLayout);

function changeLayout() {
  mainSection.classList.toggle("vertical-layout");
  codeSection.classList.toggle("sidebar");
}

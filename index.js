const mainSection = document.querySelector("main");
const codeSection = document.querySelector(".code");
const changeViewBtn = document.querySelector(".change-view");
const inputs = document.querySelectorAll(".editor__input");

changeViewBtn.addEventListener("click", changeLayout);

inputs.forEach(input => input.addEventListener("keydown", newLine));
inputs.forEach(input => input.addEventListener("input", clearGutterLines));

function changeLayout() {
  mainSection.classList.toggle("vertical-layout");
  codeSection.classList.toggle("sidebar");
}

function clearGutterLines(e) {
  const editor = e.target.parentElement;

  if (editor.tagName !== "DIV" || editor.classList.value !== "editor__code")
    return;

  const gutter = editor.querySelector(".editor__gutter");

  if (!e.target.value)
    gutter.innerHTML = `<span class="editor__number">1</span>`;
}

function newLine(e) {
  if (e.keyCode !== 13) return; // Enter key code

  const editor = e.target.parentElement;

  if (editor.tagName !== "DIV" || editor.classList.value !== "editor__code")
    return;

  const lines = editor.querySelectorAll(".editor__number").length + 1;
  const gutter = editor.querySelector(".editor__gutter");
  const line = `<span class="editor__number">${lines}</span>`;

  gutter.insertAdjacentHTML("beforeend", line);
}

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
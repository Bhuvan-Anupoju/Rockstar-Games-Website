let hamburger = document.getElementById("bar");
let crossMark = document.getElementById("xMark");
let container = document.getElementById("nav-container-sm");

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  crossMark.style.display = "flex";
  container.classList.toggle("nv-items");
});

crossMark.addEventListener("click", function () {
  crossMark.style.display = "none";
  hamburger.style.display = "flex";
  container.classList.toggle("nv-items");
});

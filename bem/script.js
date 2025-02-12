document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav").classList.add("nav--active");
});

document.querySelector(".menu-close").addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("nav--active");
});

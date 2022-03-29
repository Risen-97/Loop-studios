const menuBtn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("close");
});

const menuBtn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("close");
});

const fixedHeight = hero.getBoundingClientRect().height - 80;

window.addEventListener("scroll", () => {
  if (window.scrollY > fixedHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

const menuBtn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const scrollBtn = document.querySelector(".scroll__top");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("close");
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const fixedNav = (entries) => {
  [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("fixed");
    scrollBtn.classList.add("show");
  } else {
    nav.classList.remove("fixed");
    scrollBtn.classList.remove("show");
  }
};

const fixedOption = {
  root: null,
  threshold: 0.2,
};

const navObserver = new IntersectionObserver(fixedNav, fixedOption);

navObserver.observe(hero);

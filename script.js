window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const parallaxSection = document.querySelector("[data-parallax]");
  let scrollPosition = window.scrollY;
  parallaxSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

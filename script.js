function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  const menu = document.getElementById("menu");
  if (window.innerWidth < 600) {
    menu.style.display = "none";
  }
}

window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

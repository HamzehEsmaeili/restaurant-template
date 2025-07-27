const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Main toggle function for mobile menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  document.body.classList.toggle("overflow-hidden");
}

function checkScreenSize() {
  if (window.innerWidth >= 768) {
    // Close menu if it's open
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    btn.classList.remove("open");
    document.body.classList.remove("overflow-hidden");
  }
}

btn.addEventListener("click", navToggle);
window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);

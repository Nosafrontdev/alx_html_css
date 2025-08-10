document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggleBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });
});
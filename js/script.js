const menuBtn = document.querySelector(".m-menu"),
  menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

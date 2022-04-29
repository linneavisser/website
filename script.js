// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

//PLUS SIGN and Bag info
const plusIcon = document.querySelector(".plusSign");
const toggleInfo = document.querySelector(".toggleInner");

plusIcon.addEventListener("click", () => {
  console.log(toggleInfo);
  toggleInfo.classList.toggle("change");
});

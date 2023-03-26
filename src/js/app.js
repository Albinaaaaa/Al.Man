const menu = document.querySelector(".header__navigation");
// console.log(menu);
const header = document.querySelector(".header__container");
const menuIcon = document.querySelector(".navigation__icon");
const menuBody = document.querySelector(".navigation__list");

// console.log(header);

// console.log(window.innerWidth);

if (window.innerWidth <= 767.98) {
  //   console.log("append");
  header.append(menu);
}

menu.addEventListener("click", function (e) {
  menuIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});

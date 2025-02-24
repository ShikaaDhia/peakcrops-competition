// Mobile Nav

const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcon = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle(navOpenedClass);
  mobileNav.classList.toggle(navClosedClass);

  closeBtnIcon.classList.toggle(arrowLeftClass);
  closeBtnIcon.classList.toggle(arrowRightClass);
});
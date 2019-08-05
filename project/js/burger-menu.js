$(document).on("DOMContentLoaded", () => {
  let cross = document.querySelector(".burger-menu__cross");
  let burgerMenu = document.querySelector(".navigation__media");
  let burgerMenuOption = document.querySelector(".navigation__media-li");

  // кнопка бургер меню
  cross.addEventListener("click", () => {
    cross.classList.toggle("open");
    burgerMenu.classList.toggle("hidden");
  });

  // скрытие элемента burgerMenu по клику на одну из опций
  burgerMenuOption.addEventListener("click", () => {
    cross.classList.toggle("open");
    burgerMenu.classList.toggle("hidden");
  });
});

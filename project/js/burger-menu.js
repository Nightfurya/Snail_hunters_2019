$(document).on("DOMContentLoaded", () => {
  let cross = $(".burger-menu__cross");
  let burgerMenu = $(".navigation__media");
  let burgerMenuOption = $(".navigation__media-li");

  // кнопка бургер меню
  cross.on("click", () => {
    cross.toggleClass("open");
    burgerMenu.toggleClass("hidden");
  });

  // скрытие элемента burgerMenu по клику на одну из опций
  burgerMenuOption.on("click", () => {
    cross.toggleClass("open");
    burgerMenu.toggleClass("hidden");
  });
});

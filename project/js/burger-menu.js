$(document).on("DOMContentLoaded", () => {
  let cross = $(".burger-menu__cross");
  let burgerMenu = $(".navigation__media");
  let burgerMenuOption = $(".navigation__media-li");

  // burger button
  cross.on("click", () => {
    cross.toggleClass("open");
    burgerMenu.toggleClass("hidden");
  });

  // hide burger-menu by clicking on burger button
  burgerMenuOption.on("click", () => {
    cross.toggleClass("open");
    burgerMenu.toggleClass("hidden");
  });
});

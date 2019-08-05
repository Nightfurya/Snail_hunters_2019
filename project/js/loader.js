$(document).on("DOMContentLoaded", () => {
  let loader = $(".loader");
  if (loader.length !== 0) {
    setTimeout(() => {
      loader.addClass("hidden");
    }, 8000);
  }
});

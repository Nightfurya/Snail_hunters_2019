$(document).on("DOMContentLoaded", () => {
  let blockText = $(".info__overview");
  if (blockText.length !== 0) {
    blockText.each(function() {
      let review_full = $(this).html();
      let review = review_full;

      if (review.length > 200) {
        review = review.substring(0, 200);
        $(this).html(review + '...<div class="read_more">Читати далі</div>');
      }
      $(this).append('<div class="full_text" style="display: none;">' + review_full + "</div>");
    });

    $(".read_more").click(function() {
      $(this)
        .parent()
        .html(
          $(this)
            .parent()
            .find(".full_text")
            .html()
        );
    });
  }
});

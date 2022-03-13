$(document).ready(function () {
    $(".product").click(function () {
        $(this).find(".description").toggle();
        $(this).find(".icon").toggle();
    });
    $(".portfolio div").hover(function () {
        $(this).find(".port-overlay").toggle();
    });
});
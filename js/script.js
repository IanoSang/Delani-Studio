$(document).ready(function () {
    $(".product").click(function () {
        $(this).find(".description").toggle();
        $(this).find(".icon").toggle();
    });
});
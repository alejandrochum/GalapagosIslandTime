$('.nav-link').mouseenter(function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('hovered');
    }

}).mouseleave(function () {
    if (!$(this).hasClass('active')) {
        $(this).removeClass('hovered');
    };
});

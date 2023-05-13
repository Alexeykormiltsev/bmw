$(function () {
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
        $('.menu-btn').toggleClass('menu-btn--active');
        // $('body').toggleClass('hidden');
    });
});
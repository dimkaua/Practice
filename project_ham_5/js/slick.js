$(document).ready(function() {
    $('.slider-people').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: 'linear',
        arrows: false,
        asNavFor: ".people-slider",
        infinite: false
    })
    $('.people-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 700,
        easing: 'linear',
        arrows: true,
        asNavFor: ".slider-people",
        focusOnSelect: true,
        infinite: false
    });
});
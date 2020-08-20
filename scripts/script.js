$(document).ready(function () {

    //h1 animation
    if ($(window).width() >= 992) {
        let isAnimate = false;
        $('.header_main').hover(function() {
            if (!isAnimate) {
                $(this).toggleClass('animate__animated animate__bounce')
                isAnimate = true;
                setTimeout(() => isAnimate = false, 1000)
            }
        });
    }

    //first slide parallax
    $('.slide1').paroller();

    //cameras moving
    if ($(window).width() >= 992) {
        const scene = $('.scene')[0];
        const parallaxFirst = new Parallax(scene);

        const scene2 = $('.scene')[1];
        const parallaxSecond = new Parallax(scene2);
    }



})

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);
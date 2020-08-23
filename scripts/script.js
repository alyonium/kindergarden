$(document).ready(function () {

    //h1 animation
    if ($(window).width() >= 992) {
        let isAnimate = false;
        $('.header_main').hover(function () {
            if (!isAnimate) {
                $(this).toggleClass('animate__animated animate__bounce')
                isAnimate = true;
                setTimeout(() => isAnimate = false, 1000)
            }
        });
    }

    //first slide small device
    if ($(window).width() <= 991) {
        $('.slide1').removeClass('align-items-start');
        $('.slide1').addClass('align-items-center');
    }

    //first slide parallax
    $('.slide1').paroller();


    //cameras moving
    if ($(window).width() >= 992) {
        const scene = $('.scene')[0];
        const parallax1 = new Parallax(scene);

        const scene2 = $('.scene')[1];
        const parallax2 = new Parallax(scene2);

        const scene3 = $('.scene')[2];
        const parallax3 = new Parallax(scene3);

        const scene4 = $('.scene')[3];
        const parallax4 = new Parallax(scene4);

        // const scene5 = $('.scene')[4];
        // const parallax5 = new Parallax(scene5);

        // const scene6 = $('.scene')[5];
        // const parallax6 = new Parallax(scene6);
    }

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        prevArrow: $('.slider__left-arrow'),
        nextArrow: $('.slider__right-arrow'),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            }],
    })

    $('.cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        prevArrow: $('.cards__left-arrow'),
        nextArrow: $('.cards__right-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }]
    });

})
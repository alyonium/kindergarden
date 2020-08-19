$(document).ready(function () {
    let isAnimate = false;
    $('.header__name').hover(function() {
        if (!isAnimate) {
            $(this).toggleClass('animate__animated animate__bounce')
            isAnimate = true;
            setTimeout(() => isAnimate = false, 1000)
        }
    });
})
let full_page_bg = document.querySelector('.full_page_bg');
let section_home = document.querySelector('.section_home');

$(document).ready(function () {
    let card_slider = new Swiper(".card_slider", {
        slidesPerView: 1,
        spaceBetween: 13,
        breakpoints: {
            1700: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 2
            }
        },
        loop: true,
        navigation: {
            nextEl: '.cards .left_btn'
        }
    });
})

let dealer_slider = new Swiper(".dealer_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".dealers_right",
        prevEl: ".dealers_left",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        650: {
            slidesPerView: 2
        }
    }
});

let partners_slider = new Swiper(".partners_slider", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".partners .right_btn",
        prevEl: ".partners .left_btn",
    },
});

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    afterLoad: function (origin, destination, direction, trigger) {
        var origin = this.item;
        if (!section_home.classList.contains('active')) {
            full_page_bg.classList.add('active');
        } else {
            full_page_bg.classList.remove('active');
        }
    }
});

$('#header .bars').click(function () {
    $('.mobile_menues').removeClass('noActive');
    $('.mobile_menues').addClass('active');
})

$('.mobile_menues .mobile_menu_close').click(function () {
    $('.mobile_menues').removeClass('active');
    $('.mobile_menues').addClass('noActive');
})
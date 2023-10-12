let full_page_bg = document.querySelector('.full_page_bg');
let section_home = document.querySelector('.section_home');
let section_2 = document.querySelector('.section_2');

let card_slider = new Swiper(".card_slider", {
    slidesPerView: 1,
    spaceBetween: 13,
    breakpoints: {
        1300: {
            slidesPerView: 5,
        },
        1000: {
            slidesPerView: 4,
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

let fromIndex = 1;
let firstEnter = false;

let fullPage = new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    afterLoad: function (origin, destination, direction, trigger) {
        var origin = this.item;
        if (section_2.classList.contains('active')) {
            $('.section_home h2').removeClass('active')
            $('.section_home h2').addClass('noActive')
            $('.card_slider .main_card').each(function (idx, el) {
                setTimeout(() => {
                    $(el).removeClass('noActive');
                    $(el).addClass('active')
                    if (idx + 1 == $('.card_slider .main_card').length) {
                        setTimeout(() => {
                            $('.section_2 .cards_bg').removeClass('noActive');
                            $('.section_2 .cards_bg').addClass('active');
                            $('.section_2 .left_btn').removeClass('noActive');
                            $('.section_2 .left_btn').addClass('active');
                        }, idx * 200 + 200);
                    }
                }, idx * 200);

            })
        }

        if (!section_home.classList.contains('active')) {
            full_page_bg.classList.add('active');
        } else {
            setTimeout(() => {
                $('.section_home h2').removeClass('noActive')
                $('.section_home h2').addClass('active')
            }, 1000);
            full_page_bg.classList.remove('active');
            if (firstEnter) {
                $('.card_slider .main_card').each(function (idx, el) {
                    $('.section_2 .cards_bg').removeClass('active');
                    $('.section_2 .cards_bg').addClass('noActive');
                    setTimeout(() => {
                        $(el).removeClass('active');
                        $(el).addClass('noActive')
                        if (idx + 1 == $('.card_slider .main_card').length) {
                            setTimeout(() => {
                                $('.section_2 .left_btn').removeClass('active');
                                $('.section_2 .left_btn').addClass('noActive');
                            }, idx * 200 + 200);
                        }
                    }, idx * 200);
                })
            } else {
                firstEnter = true;
            }
        };

    },
});

$('#header .bars').click(function () {
    $('.mobile_menues').removeClass('noActive');
    $('.mobile_menues').addClass('active');
})

$('.mobile_menues .mobile_menu_close').click(function () {
    $('.mobile_menues').removeClass('active');
    $('.mobile_menues').addClass('noActive');
})
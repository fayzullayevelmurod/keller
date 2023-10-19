let full_page_bg = document.querySelector('.full_page_bg');
let section_home = document.querySelector('.section_home');
let section_2 = document.querySelector('.section_2');

if ($('.card_slider').length) {
    let card_slider = new Swiper(".card_slider", {
        slidesPerView: 1,
        spaceBetween: 13,
        speed: 0,
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
}


if ($('.dealer_slider').length) {
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
}


if ($('partners_slider').length) {
    let partners_slider = new Swiper(".partners_slider", {
        spaceBetween: 0,
        navigation: {
            nextEl: ".partners .right_btn",
            prevEl: ".partners .left_btn",
        },
    });
}

let fromIndex = 1;
let firstEnter = false;
let clear_interval_2;
let timeOutList = [];

if ($('#fullpage').length) {
    let fullPage = new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        scrollingSpeed: 0,
        onScrollOverflow: function(section, slide, position, direction){
            console.log("load ishladi");
        },
        afterLoad: function (origin, destination, direction, trigger) {
            var origin = this.item;
            if (section_2.classList.contains('active')) {
                $('.section_home h2').removeClass('active')
                $('.section_home h2').addClass('noActive')
                $('.card_slider .main_card').each(function (idx, el) {
                    timeOutList.push(
                        setTimeout(() => {
                            $(el).removeClass('noActive');
                            $(el).addClass('active')
                        }, idx * 200)
                    )
    
                })
            }
    
            if (!section_home.classList.contains('active')) {
                full_page_bg.classList.add('active');
                fullPage.setScrollingSpeed(1400)
                firstEnter = true;
            } else {
                $('.section_home h2').removeClass('noActive')
                $('.section_home h2').addClass('active')

                setTimeout(() => {
                    fullPage.setScrollingSpeed(0)
                }, 100);
            };
    
        },
    });
    setInterval(() => {
        if (section_home.classList.contains('active') && firstEnter) {
            timeOutList.forEach(item => {
                clearTimeout(item);
            })
            timeOutList = [];
            $('.card_slider .main_card').each(function (idx, el) {
                $(el).removeClass('active');
                $(el).addClass('noActive')
            })
            let clear_interval_2 = setInterval(() => {
            }, 10);
            full_page_bg.classList.remove('active');
            fullPage.setScrollingSpeed(0)
            $('.section_home h2').removeClass('noActive')
            $('.section_home h2').addClass('active')
            firstEnter = false;
        } else {
            clearInterval(clear_interval_2);
        }
    }, 100);
}


if ($('#header .bars').length) {
    $('#header .bars').click(function () {
        $('.mobile_menues').removeClass('noActive');
        $('.mobile_menues').addClass('active');
    })
}

if ($('.mobile_menues .mobile_menu_close').length) {
    $('.mobile_menues .mobile_menu_close').click(function () {
        $('.mobile_menues').removeClass('active');
        $('.mobile_menues').addClass('noActive');
    })
}

if ($('.open_modal').length) {
    $('.open_modal').click(function () {
        $('.modal_wrapper').removeClass('noActive')
        $('.modal_wrapper').addClass('active')
    })

    $('.modal_wrapper .modal_bg').click(function () {
        $('.modal_wrapper').removeClass('active')
        $('.modal_wrapper').addClass('noActive')
    })
}

if ($('.accardion').length) {
    $('.accardion .accardion_body').slideUp(0);

    $(".accardion").each(function (idx, el) {
        $(el).find('.accardion_head').click(function () {
            $(el).find('.accardion_body').slideToggle(300)
        })
    })
}

if ($('.shop_number').length) {
    let price = $('.shop_number .counter_number')[0];
    $('.shop_number .btn_left').click(function () {
        if (Number(price.innerText) != 0) {
            price.innerText = Number(price.innerText) - 1;
        }
    })

    $('.shop_number .btn_right').click(function () {
        price.innerText = Number(price.innerText) + 1;
    })
}

if ($('.list_tabs').length) {
    $('.tab_content').not('.tab_content_1').hide(0);
    $('.list_tabs .tab_btn').click(function () {
        $('.tab_content').not(`.tab_content_${$(this).attr('data-index')}`).hide(0);
        $(`.tab_content_${$(this).attr('data-index')}`).show(0);
        $('.list_tabs .tab_btn').removeClass('whiteborder');
        $(this).addClass('whiteborder');
    })
}

$(document).ready(function () {
    $("body").removeClass('active')
})
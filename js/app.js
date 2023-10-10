let full_page_bg = document.querySelector('.full_page_bg');
let section_home = document.querySelector('.section_home');

let card_slider = new Swiper(".card_slider", {
    slidesPerView: 5,
    spaceBetween: 13,
    loop: true,
});

let dealer_slider = new Swiper(".dealer_slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".dealers_right",
        prevEl: ".dealers_left",
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
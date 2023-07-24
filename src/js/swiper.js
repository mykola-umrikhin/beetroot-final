var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const arr = ['Points', 'Rebounds', 'Assists', 'Steals'];
      return '<span class="' + className + '">' + arr[index] + '</span>';
    },
  },
});

var swiperShedule = new Swiper('.swiperShedule', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination_shedule',
    clickable: true,
    bulletClass: 'swiper-pagination-bulet_shedule',
    bulletActiveClass: 'swiper-pagination-bulet-active_shedule',
    modifierClass: '_shedule',
    renderBullet: function (
      index,
      className
    ) {
      return '<span class="' + className + '">'  + '</span>';
    },
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper('.swiper_player', {
  pagination: {
    el: '.swiper-pagination_player',
    bulletClass: 'swiper-pagination-bulet_player',
    bulletActiveClass: 'swiper-pagination-bulet-active_player',
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
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
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
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiperTeamMob = new Swiper('.swiper_team-mob', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    
  },
  breakpoints: {
   640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

var swiperTeam = new Swiper('.swiper_team', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination_team',
    clickable: true,
    bulletClass: 'swiper-pagination-bulet_team',
    bulletActiveClass: 'swiper-pagination-bulet-active_team',
    modifierClass: '_team',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
});

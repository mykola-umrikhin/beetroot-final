// console.log("TEST");
// //START MOBILE Menu
const menuBtn = $('.menu-button');
const darkOverlay = $('.dark-overlay');
const mobileMenu = $('.mobile-menu');

$(document).on('click', '.menu-button', handleMenu);
$(document).on('click', '.is-submenu', handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass('visible');
  mobileMenu.toggleClass('visible');
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent('.has-submenu')
    .toggleClass('opened')
    .siblings('li')
    .removeClass('opened')
    .find('ul')
    .hide();

  $this.next('ul').slideToggle(500, function () {
    $(this).find('.has-submenu').removeClass('opened').children('ul').hide();
  });
}

function resetMobileMenu() {
  darkOverlay.removeClass('visible');
  mobileMenu.removeClass('visible');
  $('.mobile-navigation .has-submenu').removeClass('opened').find('ul').hide();
}

/* =======================  */

function initMobile() {
  console.log('is-mobile');
}

function initDesktop() {
  console.log('is-desktop');
  resetMobileMenu();
}

ssm.addState({
  id: 'tablet',
  query: '(max-width: 992px)',
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: 'desktop',
  query: '(min-width: 992px)',
  onEnter: function () {
    initDesktop();
  },
});
// ?END MOBILE Menu
////START validate email script
const input = document.querySelectorAll('.subscribe__email');
document.addEventListener('submit', handleSubmit);
input.forEach((item) => item.addEventListener('input', onInput));

function handleSubmit(e) {
  const { target } = e;
  if (target.name !== 'subscribe') {
    return;
  }
  e.preventDefault();
}

const EMAIL_REGEXP =
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

function onInput(e) {
  if (isEmailValid(e.target.value)) {
    e.target.style.color = 'black';
  } else {
    e.target.style.color = 'red';
    $('.subscribe__email').notify('Please, enter valid email', {
      position: 'top left',
      className: 'warn',
      clickToHide: true,
      autoHide: true,
      autoHideDelay: 2000,
    });
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
//?END validate email script
// //START ISOTOP

const gal = $('.gallery-isotop');

gal.isotope({
  itemSelector: '.gallery-isotop__item',
  layoutMode: 'packery',
  packery: {
    gutter: 10,
  },
});

gal.imagesLoaded().progress(function () {
  gal.isotope('layout');
});
$(document).on('click', '.gallery__tab-item', handleFilter);
function handleFilter() {
  $('.gallery__tab-item').removeClass('gallery__tab-item_active');
  const $this = $(this);
  $this.addClass('gallery__tab-item_active');
  const filter = '.' + $this.data('filter');
  gal.isotope({ filter });
}
// ?END ISOTOP

// //START FANCYBOX
Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
// ?END FANCYBOX

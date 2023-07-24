// console.log("TEST");

////START validate email script
const input = document.querySelector('.subscribe__email');
document.addEventListener('submit', handleSubmit);
input.addEventListener('input', onInput);

function handleSubmit(e) {
  const { target } = e;
  if (target.name !== 'subscribe') {
    return;
  }
  e.preventDefault();
  onInput;
}

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.color = 'black';
  } else {
    input.style.color = 'red';
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
  getSortData: {
    name: 'h2',
    created: function (item) {
      return item.dataset.create;
    },
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

function initMobile() {
  console.log('is-mobile');
}

function initTablet() {
  console.log('is-tablet');
}

function initDesktop() {
  console.log('is-desktop');
}

ssm.addStates([
  {
    id: 'mobile',
    query: '(max-width: 640px)',
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: 'tablet',
    query: '(min-width: 641px) and (max-width: 992px)',
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: 'desktop',
    query: '(min-width: 993px)',
    onEnter: function () {
      initDesktop();
    },
  },
]);

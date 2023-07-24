// //TABs code

////Variebulse
const tabsTitle = document.querySelectorAll('.main-tab__item');
const mainTabs = document.querySelectorAll('.main');

////Function for MAIN-tabs
tabsTitle.forEach((item) =>
  item.addEventListener('click', (event) =>
    onTabClick(mainTabs, tabsTitle, 'hidden', 'active-main-tab', event, item)
  )
);

////Function for NEWS-tabs
const newsTabTitle = document.querySelectorAll('.news__tab-item');
const newsTabs = document.querySelectorAll('.news__content');
newsTabTitle.forEach((item) =>
  item.addEventListener('click', (event) =>
    onTabClick(
      newsTabs,
      newsTabTitle,
      'hidden',
      'news__tab-item_active',
      event,
      item
    )
  )
);
// document
//   .querySelector('[data-tab="main-tab-1"]')
//   .classList.add('active-main-tab');
// document.querySelector('#main-tab-1').classList.remove('hidden');

////Function for tabs
function onTabClick(
  tabSelector,
  tabsTitle,
  removeTabClass = 'hidden',
  activeTitleClass,
  event,
  item
) {
  const tabsTitleTarget = event.target.getAttribute('data-tab');
  removeActiveClassTitle(tabsTitle, activeTitleClass);
  removeTab(tabSelector, removeTabClass);
  item.classList.add(activeTitleClass);
  document.getElementById(tabsTitleTarget).classList.remove(removeTabClass);
}

function removeTab(tabSelector, removeTabClass = 'hidden') {
  tabSelector.forEach((el) => el.classList.add(removeTabClass));
}

function removeActiveClassTitle(tabsTitle, activeTitleClass) {
  tabsTitle.forEach((el) => el.classList.remove(activeTitleClass));
}
//? END Function for tabs

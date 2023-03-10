// ---------------------------------------------------------

const menuBtn = document.querySelector('.mobile__menu-btn');

const menu = document.querySelector('.mobile__menu');
const bodyScroll = document.querySelector('body');

menuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(event) {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

  menuBtn.classList.toggle('isMenuOpen');
  menuBtn.setAttribute('aria-expanded', !expanded);

  menu.classList.toggle('isMenuOpen');
  bodyScroll.classList.toggle('body-scroll');
}
// -------------------------------------------------------

//  получаем текущий путь страницы с помощью
//  window.location.pathname и затем проверяем
//  каждую ссылку на соответствие этому пути.
//  Если ссылка соответствует текущей странице,
//  мы добавляем класс.active к родительскому элементу.

const links = document.querySelectorAll('.mobile__menu-link');
const currentPath = window.location.pathname;

links.forEach(link => {
  if (link.pathname === currentPath) {
    link.parentElement.classList.add('active');
  }
});
// console.log(currentPath);

// ------------------------------------------------------
// const currentPage = window.location.pathname;
// const home = document.getElementById('home-link');
// const favorite = document.getElementById('favorite-link');
// const read = document.getElementById('read-link');

// if (currentPage.includes('/index.html')) {
//   home.classList.add('current');
// } else if (currentPage.includes('/favorite.html')) {
//   favorite.classList.add('current');
// } else if (currentPage.includes('/read.html')) {
//   read.classList.add('current');
// }
// console.log(currentPage);

// -----------------------------------------------------------

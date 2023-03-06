const currentPage = window.location.pathname;
const home = document.getElementById('home-link');
const favorite = document.getElementById('favorite-link');
const read = document.getElementById('read-link');
// console.log(window.location);
// const iconHeart = new URL('../../src/*.html', import.meta.url);
// import wIcon from '../../src/index.html';
console.log(window.location.href.toString().split(window.location.origin)[0]);
// console.log(wIcon);
if (currentPage === '/index.html') {
  home.classList.add('current');
} else if (currentPage === '/favorite.html') {
  favorite.classList.add('current');
} else if (currentPage === '/read.html') {
  read.classList.add('current');
}
console.log(currentPage);

const currentPage = window.location.pathname;
const home = document.getElementById('home-link');
const favorite = document.getElementById('favorite-link');
const read = document.getElementById('read-link');

if (currentPage === '/index.html') {
  home.classList.add('current');
} else if (currentPage === '/favorite.html') {
  favorite.classList.add('current');
} else if (currentPage === '/read.html') {
  read.classList.add('current');
}
console.log(currentPage);

const currentPage = window.location.pathname;
const home = document.getElementById('home-link');
const favorite = document.getElementById('favorite-link');
const read = document.getElementById('read-link');

if (currentPage === '/index.html') {
home.classList.add('current');
} else if (currentPage === '/favorite-page.html'){
    favorite.classList.add('current');
} else if (currentPage === '/read-page.html') {
    read.classList.add('current');
}
import getCards from './api_cards';

const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 

dropBtnRef.addEventListener('click', function () {
    newsListRef.classList.toggle('show');
    dropIcon.classList.toggle('rotate');
  });
//   window.addEventListener('resize', debounce(restart, 250));

 
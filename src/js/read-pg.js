// import axios from 'axios';
// import { createCards, createMarkup }  from './cards';

// getCards(); 

// console.log(createCards());  

const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 

dropBtnRef.addEventListener('click', function () {
    newsListRef.classList.toggle('show');
    dropIcon.classList.toggle('rotate');
  });
//   window.addEventListener('resize', debounce(restart, 250));

// newsListRef.insertAdjacentHTML('beforeend', markupCards());

// const readMoreBtn = document.querySelector('.wrap-info__link'); 

// readMoreBtn.addEventListener('click', onSavedCard);

// function onSavedCard() {

// }

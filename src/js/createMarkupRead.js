
import { createMarkup } from './cards';


//  const btnMoreRead = document.querySelector('.dropbtn'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 
const dateListRef = document.querySelector('.date-list');
const errorRequest = document.querySelector('.errorRequest');


dateListRef.addEventListener('click', function () {
  newsListRef.classList.toggle('show');
  dropIcon.classList.toggle('rotate');
});

const STORAGE_KEY = 'readNews';
const STORAGE_KEY_FAV = 'favoriteNews';
const storageNews = JSON.parse(localStorage.getItem(STORAGE_KEY_FAV));

// ++++++++++++++++++++++++

export default function createMarkupRead() {
    const storageJson = localStorage.getItem(STORAGE_KEY);
    console.log("🚀 ~ createMarkupRead ~ storageJson:", storageJson)
    const storageData = JSON.parse(storageJson); 
    console.log("🚀 ~ createMarkupRead ~ storageData:", storageData); 

    let markup = "";
    
    markup = storageData
    .map(createMarkup)
      .join("");
      // console.log("🚀 ~ createMarkupFavorite ~ markup:", markup)
    newsListRef.insertAdjacentHTML("beforeend", markup);
    // if(newsListRef === '') {
    //   errorRequest.classList.add('visually-hidden');   
    // }
  readDateCard(storageData.readDateNew); 
  }
  


  function readDateCard(items) {
    console.log(items); 
    const markup = items.map(({ readDateNew }) => {
      return `<li class="dropbtn calendar-btn-span">
      <span class="btn-span">${readDateNew}</span>
        <svg class="icon-down-read-pg" width="15" height="9">
            <use href="/src/icon.svg#icon-arrow-down"></use>
          </svg>
  </li>`
  }).sort((a, b) => b - a).join(""); 
  dateListRef.insertAdjacentHTML('beforeend', markup); 
}



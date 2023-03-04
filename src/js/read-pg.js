// import axios from 'axios';
// import { getCards } from './api_cards';
import { savedApiData } from './favorite'; 

// console.log(savedApiData); 
const STORAGE_KEY = 'readedNews';
const readedNews = [];

const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 
const gallery = document.querySelector('.gallery'); 
console.log("🚀 ~ gallery:", gallery)

dropBtnRef.addEventListener('click', function () {
  newsListRef.classList.toggle('show');
  dropIcon.classList.toggle('rotate');
});

gallery.addEventListener('click', getReadedNewsId);

export default function getReadedNewsId(event) {
  event.preventDefault();

  if(event.target.classList.contains("wrap-info__link")){
    console.log('I"m button'); 
    const id=event.target.closest(".js-card-item").dataset.targetId

    saveReadedNew(id);
  }
}

function saveReadedNew(id) {
  // const valuesStorage = {
  //   readedNews: [],
  //   date: new Date(),
  // }

  const readedNew = savedApiData.find(item=>item.id===id)

  if (readedNews.length<1){
    readedNews.push(readedNew)
} 

if(readedNews.every(el=>Number(el.id)!==Number(id))) {
  readedNews.push(readedNew)
}
}

const valuesStorageJSON = JSON.stringify(readedNews); 
console.log("valuesStorageJSON:", valuesStorageJSON); 

localStorage.setItem(STORAGE_KEY, valuesStorageJSON); 
console.log(readedNews); 
// *************************************



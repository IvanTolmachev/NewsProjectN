// import axios from 'axios';
// import { getCards } from './api_cards';
import { savedApiData } from './favorite'; 

// console.log(savedApiData);


const STORAGE_KEY = 'readedNews';
// const readedNews = [];

let valuesStorage = {}; 

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
 let valuesStorage = {
    readedNews: [],
    date: new Date(),
  }

  console.log(valuesStorage); 

  const readedNew = savedApiData.find(item=>item.id===id)

  if (readedNews.length<1){
    valuesStorage.readedNews.push(readedNew)
} 

if(valuesStorage.readedNews.every(el=>Number(el.id)!==Number(id))) {
  valuesStorage.readedNews.push(readedNew)
}
}

const valuesStorageJSON = JSON.stringify(valuesStorage); 
console.log("valuesStorageJSON:", valuesStorageJSON); 

localStorage.setItem(STORAGE_KEY, valuesStorageJSON); 
console.log(valuesStorage.date); 
// *************************************





// **************Я поставила****************
// gallery.addEventListener('click', funcBtn);

// function funcBtn(ev) {
//     if(ev.target.classList.contains("wrap-info__link")) {
//         ev.preventDefault(); 
//         console.log('I button')
//     }
// }
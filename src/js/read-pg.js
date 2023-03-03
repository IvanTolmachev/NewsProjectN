// import axios from 'axios';
import { getCards } from './api_cards';
console.log("🚀 ~ getCards:", getCards)


const savedCards = []; 

async function getApiData() {
  const response = await getCards();
  const data = response.data.results;
  console.log(data);
  createSaveCards(data);
}

const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 

dropBtnRef.addEventListener('click', function () {
    newsListRef.classList.toggle('show');
    dropIcon.classList.toggle('rotate');
  });




function createSaveCards(array) {

  array.map(({ id, url, title, section, abstract, published_date }) => {
      const item = {}
      item['id'] = `${id}`;
      item['url'] = `${url}`;
      item['title'] = `${title}`;
      item['section'] = `${section}`;
      item['description'] = `${abstract}`;
      item['published_date'] = `${published_date}`;
      savedCards.push(item);
      // localStorage.setItem(STORAGE_KEY, JSON.stringify(savedApiData));

      // console.log("🚀 ~ arrey.map ~ item:", item)
      
  })
  // console.log('savedApiData', savedApiData);
}
getApiData();





// console.log(createCards());
// console.log(createMarkup()); 
//   window.addEventListener('resize', debounce(restart, 250));

// newsListRef.insertAdjacentHTML('beforeend', markupCards());

// const readMoreBtn = document.querySelector('.wrap-info__link'); 
// console.log("🚀 ~ readMoreBtn:", readMoreBtn)

// readMoreBtn.addEventListener('click', onSavedCard);

// function onSavedCard(event) {
//   console.log(event); 
//   let date = new Date();
//   console.log("🚀 ~ onSavedCard ~ date:", date); 
  
//   // createMarkup().then((data) => console.log(data)); 
// }

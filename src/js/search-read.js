iconHeart = new URL('../images/icon.svg', import.meta.url);
import { createMarkup  } from "./markup-template";
// import {loadLS} from './lStorage'
import {checkFavorites} from './is-new-favorite'

const STORAGE_KEY = 'readNews';
const STORAGE_KEY_FAVORITE = 'favoriteNews';
const readNews = JSON.parse(localStorage.getItem(STORAGE_KEY));
const itemListRef = document.querySelector('.item-list');
const errorRequest = document.querySelector(".errorRequest");
const serachForm = document.querySelector('.search-form');
const dataList = document.querySelector('.dropbtn');

serachForm.addEventListener('submit', onSearch)

function onSearch(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.elements.searchQuery.value.trim();
    
    if (!Boolean(query)){
        itemListRef.innerHTML=createMarkup(readNews)
        errorRequest.classList.add('visually-hidden')
        dataList.classList.remove('visually-hidden')
        checkFavorites(STORAGE_KEY_FAVORITE)
        return
      }
    
    let foundNews=[]
   readNews
    .map(({ id, section, imgUrl, title, abstract, newDateStr, url }) =>{
        
        if(title.toLowerCase().includes(query.toLowerCase())) {
          foundNews.push({id:`${id}`,
          url :`${url}`,
          title : `${title}`,
          section: `${section}`,
          abstract : `${abstract}`,
          newDateStr : newDateStr,
          imgUrl : imgUrl,})
        }
        
    })
    const markup=createMarkup(foundNews)
        console.log("🚀 ~ onSearch ~ markup:", markup)
        itemListRef.innerHTML=markup
    if (foundNews.length===0) {
        errorRequest.classList.remove('visually-hidden')
        dataList.classList.add('visually-hidden')
      }
    itemListRef.innerHTML= markup;
    checkFavorites(STORAGE_KEY_FAVORITE)
}



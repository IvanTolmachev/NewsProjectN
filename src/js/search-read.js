iconHeart = new URL('../images/icon.svg', import.meta.url);
<<<<<<< Updated upstream
import { createMarkup  } from "./markup-template";
// import {loadLS} from './lStorage'
import {checkFavorites} from './is-new-favorite'

=======
import { createMarkupRead } from './createMarkupRead';
>>>>>>> Stashed changes
const STORAGE_KEY = 'readNews';
const STORAGE_KEY_FAVORITE = 'favoriteNews';
const readNews = JSON.parse(localStorage.getItem(STORAGE_KEY));
const itemListRef = document.querySelector('.item-list');
const errorRequest = document.querySelector('.errorRequest');
const serachForm = document.querySelector('.search-form');
const dataList = document.querySelector('.dropbtn');

//serachForm.addEventListener('submit', onSearch)

function onSearch(evt) {
<<<<<<< Updated upstream
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
=======
  evt.preventDefault();
  const query = evt.currentTarget.elements.searchQuery.value.trim();

  if (!Boolean(query)) {
    createMarkupRead(storageNews);
    errorRequest.classList.add('visually-hidden');
    dataList.classList.remove('visually-hidden');
    return;
  }
  let markup = '';

  markup = storageNews
    .map(({ id, section, imgUrl, title, abstract, newDateStr, url }) => {
      if (title.toLowerCase().includes(query.toLowerCase())) {
        return `<li class="card js-card-item" data-target-id=${id}>
            <div class="wrap-image">
              <img
                src="${imgUrl}"
                alt="photo"
                class="wrap-image__photo"
              />
              <p class="wrap-image__text">${section}</p>
              <button type="button"  class="wrap-image__btn js-is-favorite">
                <span class="wrap-image__btn-text js-is-favorite">Remove from favorite</span>
                  <svg class="js-is-favorite fill-heard" width="16" height="16">
                    <use class="js-is-favorite" href ='${iconHeart}#icon-heart'></use>
                  </svg>
              </button>
            
            </div>
                <h2 class="card__title">${title}</h2>
                <p class="card__description">${
                  abstract.length > 112
                    ? abstract.slice(0, 113) + '...'
                    : abstract
                }</p>
                <div class="wrap-info">
                    <p class="wrap-info__time">${newDateStr}</p>
                    <a href="${url}" class="wrap-info__link" target="_blank" rel="noreferrer noopener">Read more</a>
                    <p class="wrap-image__active visually-hidden">Already read</p>
                </div>
          </li>`;
      }
    })
    .join('');
  console.log('🚀 ~ onSearch ~ !Boolean(query):', !Boolean(query));
  console.log('🚀 ~ onSearch ~ !Boolean(markup):', !Boolean(markup));
  if (!Boolean(markup)) {
    errorRequest.classList.remove('visually-hidden');
    dataList.classList.add('visually-hidden');
  }
  itemListRef.innerHTML = markup;
>>>>>>> Stashed changes
}



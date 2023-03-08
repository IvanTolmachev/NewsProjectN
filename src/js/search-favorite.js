<<<<<<< Updated upstream
import {createMarkupFavorite} from './createMarkupFavorite'
const STORAGE_KEY = 'favoriteNews';
const favoriteNews = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const favoriteList = document.querySelector(".gallery");
const errorRequest = document.querySelector(".errorRequest");
=======
import { iconHeart } from './createMarkupFavorite';
import { createMarkupFavorite } from './createMarkupFavorite';
const STORAGE_KEY = 'favoriteNews';
const storageNews = JSON.parse(localStorage.getItem(STORAGE_KEY));
const favoriteList = document.querySelector('.gallery');
const errorRequest = document.querySelector('.errorRequest');
>>>>>>> Stashed changes
const serachForm = document.querySelector('.search-form');

//serachForm.addEventListener('submit', onSearch)

function onSearch(evt) {
<<<<<<< Updated upstream
    evt.preventDefault();
    const query = evt.currentTarget.elements.searchQuery.value.trim();
    
    if (!Boolean(query)){
      createMarkupFavorite(favoriteNews)
      errorRequest.classList.add('visually-hidden')
      return
    }
    let markup = "";
    let foundNews=[]
  markup = favoriteNews
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
    createMarkupFavorite(foundNews)
    if(foundNews.length===0) {
      errorRequest.classList.remove('visually-hidden')
    }
      
=======
  evt.preventDefault();
  const query = evt.currentTarget.elements.searchQuery.value.trim();

  if (!Boolean(query)) {
    createMarkupFavorite();
    errorRequest.classList.add('visually-hidden');
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
  if (!Boolean(markup)) {
    errorRequest.classList.remove('visually-hidden');
  }
  favoriteList.innerHTML = markup;
>>>>>>> Stashed changes
}

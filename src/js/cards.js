import getCards from './api_cards';
import axios from 'axios';

const iconHeart = new URL('../images/icon.svg', import.meta.url);

const refs = {
  gallery: document.querySelector('.gallery'),
};

async function createCards() {
  const response = await getCards();
  const data = response.data.results;
  console.log(data);
  createMarkup(data);
}
createCards();
function createMarkup(arr) {
  const markup = arr
    .map(({ id, url, title, section, abstract, published_date, media }) => {
      let imgUrl = media.map(media => media['media-metadata'][2].url);
      return `
       <div class="card" id="${id}">
        <div class="wrap-image">
          <img
            src="${imgUrl}"
            alt="photo"
           class="wrap-image__photo"
          />
          <p class="wrap-image__text">${section}</p>
          <button type="button" class="wrap-image__btn"><span class="js-favorite-btn-text">Add to favorite</span>
           <svg class="wrap-image__icon" width="16" height="16">
                <use href ='${iconHeart}#icon-heart'></use>
              </svg></button>
        </div>
        <h2 class="card__title">${title}</h2>
        <p class="card__description">${abstract}</p>
        <div class="wrap-info">
          <p class="wrap-info__time">${published_date}</p>
          <a href="${url}" class="wrap-info__link">Read more</a>
        </div>
      </div>
        `;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

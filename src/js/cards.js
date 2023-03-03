import { getCards } from './api_cards';
import axios from 'axios';

const iconHeart = new URL('../images/icon.svg', import.meta.url);

const refs = {
  gallery: document.querySelector('.gallery'),
};

export async function createCards() {
  const response = await getCards();
  const data = response.data.results;
  console.log(data);
  createMarkup(data);
}
createCards();
export function createMarkup(arr) {
  const markup = arr
    .map(({ id, url, title, section, abstract, published_date, media }) => {
      let imgUrl = media.map(media => media['media-metadata'][2].url);
      let newDateStr = published_date.replace(/-/g, '/');

      return `
       <li class="card js-card-item" data-target-id="${id}">
        <div class="wrap-image">
          <img
            src="${imgUrl}"
            alt="photo"
           class="wrap-image__photo"
          />
          <p class="wrap-image__text">${section}</p>
          <button type="button" class="wrap-image__btn js-tartet-favorite">
          <span class="wrap-image__btn-text js-tartet-favorite">Add to favorite</span>
           <svg class="wrap-image__icon js-tartet-favorite" width="16" height="16">
                <use href ='${iconHeart}#icon-heart' class="js-tartet-favorite"></use>
              </svg></button>
        </div>
        <h2 class="card__title">${title}</h2>
        <p class="card__description">${
          abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract
        }</p>
        <div class="wrap-info">
          <p class="wrap-info__time">${newDateStr}</p>
          <a href="${url}" class="wrap-info__link">Read more</a>
        </div>
      </li>
        `;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}



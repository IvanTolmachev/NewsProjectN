import { checkRead, addRead } from './apiCard';
import { arrLastData } from './apiNews';
const READ_NEWS = 'readNews';
const favoriteList = document.querySelector('.gallery');
const errorRequest = document.querySelector('.errorRequest');
export const iconHeart = new URL('../images/icon.svg', import.meta.url);
const STORAGE_KEY_FAVORITE = 'favoriteNews';
const storageNews = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITE));

export function createMarkupFavorite() {
  // console.log("🚀 ~ storageNews:", storageNews)

  if (!Boolean(storageNews)) {
    errorRequest.classList.remove('visually-hidden');
    return;
  }

  let markup = '';

  markup = storageNews
    .map(({ id, section, imgUrl, title, abstract, newDateStr, url }) => {
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
              abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract
            }</p>
            <p class="wrap-info__time">${newDateStr}</p>
            <a href="${url}" class="wrap-info__link" target="_blank" rel="noreferrer noopener">Read more</a>
            <p class="wrap-image__active visually-hidden">Already read</p>
      </li>`;
    })
    .join('');
  // favoriteList.insertAdjacentHTML("beforeend", markup);
  favoriteList.innerHTML = markup;
  checkRead(READ_NEWS);
}
createMarkupFavorite();
favoriteList.addEventListener('click', e => {
  arrLastData.length = 0;
  arrLastData.push(...storageNews);

  addRead(e);
});

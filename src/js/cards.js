import getCards from './api_cards';
import axios from 'axios';

// const refs = {
// gallery: document.querySelector(".gallery")
// }

async function createCards() {
  const response = await getCards();
  const data = response.data.results;
  console.log(data);
  pushMarkup(data);
}
createCards();
function createMarkup(arr) {
  const markup = arr
    .map(({ id, url, title, section, abstract, published_date }) => {
      return `
       <div class="card" id="${id}">
        <div class="wrap-image">
          <img
            src="${imgUrl}"
            alt="photo"
            width="250"
            height="250"
            class="wrap-image__photo"
          />
          <p class="wrap-image__text">${section}</p>
          <button type="button" class="wrap-image__btn"><span class="js-favorite-btn-text">Add to favorite
           <svg class="wrap-image__icon" width="16" height="16">
                <use href="./images/icon.svg#icon-heart"></use>
              </svg></span></button>
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
  //   refs.gallery.insertAdjacentHTML('beforeend', markup);
}

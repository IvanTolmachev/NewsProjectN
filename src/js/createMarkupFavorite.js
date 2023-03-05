
const favoriteList = document.querySelector(".favorite");
// console.log("🚀 ~ favorite:", favorite)

// const container = document.querySelector(".container");
const iconHeart = new URL('../images/icon.svg', import.meta.url);

// localStorage.setItem("test", JSON.stringify(localStorageDataTest));

const STORAGE_KEY = 'favoriteNews';

export default function createMarkupFavorite() {
    const storageDataJson=localStorage.getItem(STORAGE_KEY)
    const storageData=JSON.parse(storageDataJson)
    console.log("🚀 ~ storageData:", storageData)


  let markup = "";
  
  markup = storageData
    .map(({ id, section, imgUrl, title, abstract, newDateStr, url }) => {
        // if (identifier !== Number(id)) {
            
        //     return
        // }
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
              <svg class="wrap-image__icon js-is-favorite fill-heard" width="16" height="16">
                <use class="js-is-favorite" href ='${iconHeart}#icon-heart'></use>
              </svg>
          </button>
        
        </div>
            <h2 class="card__title">${title}</h2>
            <p class="card__description">${abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract}</p>
            <div class="wrap-info">
                <p class="wrap-info__time">${newDateStr}</p>
                <a href="${url}" class="wrap-info__link">Read more</a>
            </div>
      </li>`;
    })
    .join("");
    // console.log("🚀 ~ createMarkupFavorite ~ markup:", markup)
    favoriteList.insertAdjacentHTML("beforeend", markup);
}

createMarkupFavorite();


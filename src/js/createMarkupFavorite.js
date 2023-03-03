
const favorite = document.querySelector(".favorite");
console.log("🚀 ~ favorite:", favorite)
// const container = document.querySelector(".container");


// localStorage.setItem("test", JSON.stringify(localStorageDataTest));

const STORAGE_KEY = 'favoriteNews';

export default function createMarkupFavorite() {
    const storageDataJson=localStorage.getItem(STORAGE_KEY)
    const storageData=JSON.parse(storageDataJson)
    console.log("🚀 ~ storageData:", storageData)

  
  let markup = "";
  
  markup = storageData
    .map(({ id, section, src, title, description, published_date, url }) => {
        // if (identifier !== Number(id)) {
            
        //     return
        // }
      return `<li class="card js-card-item" data-target-id=${id}>
        <div class="wrap-image">
          <img
            src="${src}"
            alt=""
            width="250"
            height="250"
            class="wrap-image__photo"
          />
          <p class="wrap-image__text">${section}</p>
          <button type="button"  class="wrap-image__btn js-tartet-favorite"><span class="js-favorite-btn-text js-tartet-favorite">Add to favorite</span>
                    <svg class="wrap-image__icon js-tartet-favorite" width="16" height="16">
                            <use class="js-tartet-favorite" href ='./images/icon.svg#icon-heart'></use>
                        </svg>
                </button>
        
        </div>
            <h2 class="card__title">${title}</h2>
            <p class="">${description}</p>
            <div class="wrap-info">
                <p class="wrap-info__time">${published_date}</p>
                <a href="${url}" class="wrap-info__link">Read more</a>
            </div>
      </li>`;
    })
    .join("");
    // console.log("🚀 ~ createMarkupFavorite ~ markup:", markup)
  favorite.insertAdjacentHTML("beforeend", markup);
}

createMarkupFavorite();
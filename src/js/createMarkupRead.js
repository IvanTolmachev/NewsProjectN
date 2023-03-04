const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const newsListRef = document.querySelector('.news-list'); 

console.log("🚀 ~ newsListRef:", newsListRef);

dropBtnRef.addEventListener('click', function () {
  newsListRef.classList.toggle('show');
  dropIcon.classList.toggle('rotate');
});


const STORAGE_KEY = 'readNews';

// ++++++++++++++++++++++++



export default function createMarkupRead() {
    const storageJson = localStorage.getItem(STORAGE_KEY);
    console.log("🚀 ~ createMarkupRead ~ storageJson:", storageJson)
    const storageData = JSON.parse(storageJson); 
    console.log("🚀 ~ createMarkupRead ~ storageData:", storageData)
  

    let markup = "";
    
    markup = storageData
      .map(({ id, section, imgUrl, title, abstract, published_date, url }) => {
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
            <button type="button"  class="wrap-image__btn js-tartet-favorite"><span class="js-favorite-btn-text js-tartet-favorite">Remove from favorite</span>
                      <svg class="wrap-image__icon js-tartet-favorite" width="16" height="16">
                              <use class="js-tartet-favorite" href ='./images/icon.svg#icon-heart'></use>
                          </svg>
                  </button>
          
          </div>
              <h2 class="card__title">${title}</h2>
              <p class="card__description">${abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract}</p>
              <div class="wrap-info">
                  <p class="wrap-info__time">${published_date}</p>
                  <a href="${url}" class="wrap-info__link">Read more</a>
              </div>
        </li>`;
      })
      .join("");
      // console.log("🚀 ~ createMarkupFavorite ~ markup:", markup)
    newsListRef.insertAdjacentHTML("beforeend", markup);
  }
  
  createMarkupRead(); 



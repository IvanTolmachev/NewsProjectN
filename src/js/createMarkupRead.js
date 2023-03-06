import { iconHeart } from './createMarkupFavorite'; 
//  const btnMoreRead = document.querySelector('.dropbtn'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
const dateListRef = document.querySelector('.date-list');
// const errorRequest = document.querySelector('.errorRequest');
const itemListRef = document.querySelector('.item-list'); 


dateListRef.addEventListener('click', function () {
  itemListRef.classList.toggle('show');
  dropIcon.classList.toggle('rotate');
});

const STORAGE_KEY = 'readNews';

// ++++++++++++++++++++++++

const storageJson = localStorage.getItem(STORAGE_KEY);
    console.log("🚀 ~ createMarkupRead ~ storageJson:", storageJson)
    const storageData = JSON.parse(storageJson); 
    console.log("🚀 ~ createMarkupRead ~ storageData:", storageData); 

    createMarkupRead();

export default function createMarkupRead() {
  // if (Boolean(storageData)) {
  //   errorRequest.classList.remove('visually-hidden'); 
  //   return
  // }
let markup = ""; 
   markup = storageData
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
            <p class="card__description">${abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract}</p>
            <div class="wrap-info">
                <p class="wrap-info__time">${newDateStr}</p>
                <a href="${url}" class="wrap-info__link">Read more</a>
            </div>
      </li>`;
    })
    .join("");
    itemListRef.insertAdjacentHTML('beforeend', markup);
   
 

  //  console.log(!Boolean(storageData)); 
  //   if(!Boolean(storageData)) {
  //     errorRequest.classList.remove('visually-hidden');
  //   }
  // readDateCard(storageData.readDateNew); 
  }
  
  // createMarkupRead(); 


//   function readDateCard(items) {
//     console.log(items); 
//     const markup = items.map(({ readDateNew }) => {
//       return `<li class="dropbtn calendar-btn-span">
//       <span class="btn-span">${readDateNew}</span>
//         <svg class="icon-down-read-pg" width="15" height="9">
//             <use href="/src/icon.svg#icon-arrow-down"></use>
//           </svg>
//   </li>`
//   }).sort((a, b) => b - a).join(""); 
//   dateListRef.insertAdjacentHTML('beforeend', markup); 
// }



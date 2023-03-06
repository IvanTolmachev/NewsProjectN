// const iconHeart = new URL('../images/icon.svg', import.meta.url);
//  const btnMoreRead = document.querySelector('.dropbtn'); 
// const dropIcon = document.querySelector('.icon-down-read-pg'); 
// // const dateListRef = document.querySelector('.date-list');
// // const errorRequest = document.querySelector('.errorRequest');
// const itemListRef = document.querySelector('.item-list'); 



// const STORAGE_KEY = 'readNews';

// // ++++++++++++++++++++++++

// const storageJson = localStorage.getItem(STORAGE_KEY);
//     console.log("🚀 ~ createMarkupRead ~ storageJson:", storageJson)
//     const storageData = JSON.parse(storageJson); 
//     console.log("🚀 ~ createMarkupRead ~ storageData:", storageData); 

   


//     function createMarkupRead(arr) {
//       const markup = arr
//         .map(({ id, url, title, section, abstract, published_date, media }) => {
//           let imgUrl = media.map(media => media['media-metadata'][2].url);
//           return `
//            <li class="card js-card-item" data-target-id="${id}">
//             <div class="wrap-image">
//               <img
//                 src="${imgUrl}"
//                 alt="photo"
//                class="wrap-image__photo"
//               />
//               <p class="wrap-image__text">${section}</p>
//              <button type="button" class="wrap-image__btn js-tartet-favorite">
//                 <span class="js-tartet-favorite">Add to favorite</span>
//                  <svg class="wrap-image__icon js-tartet-favorite" width="16" height="16">
//                  <use class="js-tartet-favorite"></use>
//                     </svg></button>
//             </div>
//             <h2 class="card__title">${title}</h2>
//             <p class="card__description">${abstract}</p>
//             <div class="wrap-info">
//               <p class="wrap-info__time">${published_date}</p>
//               <button class="wrap-info__link">Read more</button>
//             </div>
//           </li>
//             `;
//         })
//         .join('');
//       // console.log(markup);
//       itemListRef.insertAdjacentHTML('beforeend', markup);
//     }
  
//     createMarkupRead(storageData);

//   // createMarkupRead(); 
//   btnMoreRead.addEventListener('click', function () {
//     itemListRef.classList.toggle('show');
//     dropIcon.classList.toggle('rotate');
//   });

// //   function readDateCard(items) {
// //     console.log(items); 
// //     const markup = items.map(({ readDateNew }) => {
// //       return `<li class="dropbtn calendar-btn-span">
// //       <span class="btn-span">${readDateNew}</span>
// //         <svg class="icon-down-read-pg" width="15" height="9">
// //             <use href="/src/icon.svg#icon-arrow-down"></use>
// //           </svg>
// //   </li>`
// //   }).sort((a, b) => b - a).join(""); 
// //   dateListRef.insertAdjacentHTML('beforeend', markup); 
// // }


// Пробний
const iconHeart = new URL('../images/icon.svg', import.meta.url);
 const btnMoreRead = document.querySelector('.dropbtn'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 
// const dateListRef = document.querySelector('.date-list');
// const errorRequest = document.querySelector('.errorRequest');
const itemListRef = document.querySelector('.item-list'); 



const STORAGE_KEY = 'readNews';

// ++++++++++++++++++++++++

const storageJson = localStorage.getItem(STORAGE_KEY);
    console.log("🚀 ~ createMarkupRead ~ storageJson:", storageJson)
    const storageData = JSON.parse(storageJson); 
    console.log("🚀 ~ createMarkupRead ~ storageData:", storageData); 

   

    function createMarkupRead(arr) {
      const markup = arr
      .map(({ id, url, title, section, abstract, published_date, media }) => {
        // let imgUrl = media.map(media => media['media-metadata'][2].url);
        let newDateStr = published_date;
        //Проверка есть ли эта новость в Favorite
        // checkIsNewFavorite(id)
        // console.log("🚀 ~ storageNews:", storageNews)
        if (
          Boolean(storageData) &&
          storageData.some(el => Number(el.id) === Number(id))
        ) {
          // console.log(" Перевірка! Есть favorite новости")
          return `<li class="card js-card-item" data-target-id=${id}>
          <div class="wrap-image">
            <img
              src="#"
              alt="photo"
              class="wrap-image__photo"
            />
            <p class="wrap-image__text">${section}</p>
            <button type="button"  class="wrap-image__btn js-is-favorite">
            <span class="wrap-image__btn-text js-is-favorite ">Remove from favorite</span>
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
                  <a href="${url}" class="wrap-info__link">Read more</a>
                  <p class="wrap-image__active visually-hidden">Already read</p>
          </li>`;
        }
        //
        else
          return `
           <li class="card  js-card-item" data-target-id="${id}">
        <div class="wrap-image">
            <img
              src="#"
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
            <p class="wrap-info__time">${newDateStr}</p>
            <a href="${url}" class="wrap-info__link" target="_blank" rel="noreferrer noopener">Read more</a>
            <p class="wrap-image__active visually-hidden">Already read</p>
        </li>
       `;
      })
      .join('');
    itemListRef.insertAdjacentHTML('beforeend', markup);
  }
   
  
    createMarkupRead(storageData);

  // createMarkupRead(); 
  btnMoreRead.addEventListener('click', function () {
    itemListRef.classList.toggle('show');
    dropIcon.classList.toggle('rotate');
  });

//   function readDateCard(items) {
//     console.log(items); 
//     const markup = items.map(({ readDateNew }) => {
//       return `<li class="dropbtn calendar-btn-span">
//       <span class="btn-span">${readDateNew}</span>
//         <svg class="icon-down-read-pg" width="15" height="9">
//             <use href="/src/icon.svg#icon-arrow-down"></use>
//           </svg>
//   </li>`
//   }).sort((a, b) => b.readDateNew - a.readDateNew).join(""); 
//   dateListRef.insertAdjacentHTML('beforeend', markup); 
// }

// cards.sort((a, b) => new Date(b.date_viewed) - new Date(a.date_viewed));
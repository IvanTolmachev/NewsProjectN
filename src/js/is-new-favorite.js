import {  loadLS } from './lStorage';
export function checkFavorites(key) {
    let favoritNews = loadLS(key);
    // console.log(favoritNews);
    const cardNews = Array.from(document.querySelectorAll('.card'));
    // console.log(cardNews);
    if (favoritNews) {
      const allId = favoritNews.map(i => i.id);
      cardNews.forEach(i => {
        if (allId.includes(i.dataset.targetId)) {
          i.classList.add('inFavorite');
          //змінила тільки те що нижче
          const favoriteText = i.querySelector('span.js-tartet-favorite');
          favoriteText.textContent = 'Remove from favorite';
  
          const favoriteBtn=i.querySelector('button.js-tartet-favorite')
          const favoriteSvg=i.querySelector('svg.js-tartet-favorite')
          const favoriteUse=i.querySelector('use.js-tartet-favorite')
          
          favoriteBtn.classList.replace('js-tartet-favorite','js-is-favorite' );
          favoriteText.classList.replace('js-tartet-favorite','js-is-favorite' );
          favoriteSvg.classList.replace('js-tartet-favorite','js-is-favorite' );
          favoriteUse.classList.replace('js-tartet-favorite','js-is-favorite' );
          favoriteSvg.classList.replace('wrap-image__icon','fill-heard');
        }
      });
    }
  }
  
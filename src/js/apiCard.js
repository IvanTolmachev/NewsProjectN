import { saveLS, loadLS, removeLS } from './lStorage';
import { arrLastData } from './apiNews';
//import { savedApiData } from './cards';

const FAIVORIT_NEWS = 'favoriteNews';
const READ_NEWS = 'readNews';

export function checkFavorites(key) {
  let favoritNews = loadLS(key);
  const cardNews = Array.from(document.querySelectorAll('.card'));
  if (favoritNews) {
    const allId = favoritNews.map(i => i.id);
    cardNews.forEach(i => {
      if (allId.includes(i.dataset.targetId)) {
        i.classList.add('inFavorite');
        const favoriteText = i.querySelector('#favorit-txt');
        favoriteText.textContent = 'Remove from favorite';

        const favoriteBtnText = i.querySelector(`span.js-tartet-favorite`);
        const favoriteBtn = i.querySelector(`button.js-tartet-favorite`);
        const favoriteSvg = i.querySelector(`svg.js-tartet-favorite`);
        const favoriteUse = i.querySelector(`use.js-tartet-favorite`);
        favoriteBtnText.classList.replace(
          'js-tartet-favorite',
          'js-is-favorite'
        );
        favoriteBtn.classList.replace('js-tartet-favorite', 'js-is-favorite');
        favoriteSvg.classList.replace('js-tartet-favorite', 'js-is-favorite');
        favoriteUse.classList.replace('js-tartet-favorite', 'js-is-favorite');
        favoriteSvg.classList.replace('wrap-image__icon', 'fill-heard');
      }
    });
  }
}

export function togleFaforite(e) {
  if (e.target.classList.contains('favorit-bth')) {
    const itemNews = e.target.closest('.js-card-item');
    const favoriteText = itemNews.querySelector('#favorit-txt');
    const newsId = itemNews.dataset.targetId;

    let favoritNews = loadLS(FAIVORIT_NEWS);
    // console.log(arrLastData);
    let targetNews = arrLastData.find(i => i.id === newsId);
    // console.log(targetNews);
    if (!favoritNews) {
      favoritNews = [];
      favoritNews.push(targetNews);
      saveLS(FAIVORIT_NEWS, favoritNews);
      itemNews.classList.add('inFavorite');
      favoriteText.textContent = 'Remove from favorite';
      return;
    }

    const hasNews = favoritNews.findIndex(i => i.id === newsId);
    //console.log(hasNews);
    if (hasNews < 0) {
      favoritNews.push(targetNews);
      saveLS(FAIVORIT_NEWS, favoritNews);
      itemNews.classList.add('inFavorite');
      favoriteText.textContent = 'Remove from favorite';
    } else {
      favoritNews.splice(hasNews, 1);

      saveLS(FAIVORIT_NEWS, favoritNews);
      if (!favoritNews.length) removeLS(FAIVORIT_NEWS);
      itemNews.classList.remove('inFavorite');
      favoriteText.textContent = 'Add to favorite';
    }
    // checkFavorites(FAIVORIT_NEWS);
  }
}

export function addRead(e) {
  e.preventDefault();
  // const cardNews = Array.from(document.querySelectorAll('.card'));
  //const arrLastData = [...cardNews];
  //console.log(arrLastData);
  if (e.target.classList.contains('wrap-info__link')) {
    const itemNews = e.target.closest('.js-card-item');
    //  const favoriteText = itemNews.querySelector('#favorit-txt');
    const newsId = itemNews.dataset.targetId;
    itemNews.classList.add('inRead');
    let readNews = loadLS(READ_NEWS);
    const targetNews = arrLastData.find(i => i.id === newsId);
    // console.log(targetNews);
    // console.log(readNews);
    // console.log(newsId);
    //'03/03/2023';

    const readDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    // console.log(readDate);
    // console.log(targetNews.readDate);
    targetNews.readDate = readDate;

    if (!readNews) {
      readNews = [];
      readNews.push(targetNews);
      saveLS(READ_NEWS, readNews);

      return;
    }
    const hasNews = readNews.findIndex(i => i.id === newsId);
    if (hasNews < 0) {
      readNews.push(targetNews);
      saveLS(READ_NEWS, readNews);
    } else {
      readNews.splice(hasNews, 1);
      readNews.push(targetNews);
      saveLS(READ_NEWS, readNews);
      if (!readNews.length) removeLS(READ_NEWS);
    }
  }
}

export function checkRead(key) {
  let readNews = loadLS(key);
  const cardNews = Array.from(document.querySelectorAll('.card'));
  // console.log(cardNews);
  if (readNews) {
    const allId = readNews.map(i => i.id);
    cardNews.forEach(i => {
      if (allId.includes(i.dataset.targetId)) {
        i.classList.add('inRead');
        // const favoriteText = i.querySelector('#favorit-txt');
      }
    });
  }
}

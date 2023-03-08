import { createCard, icon, arrLastData } from './apiNews';
import { saveLS, loadLS, removeLS } from './lStorage';
import { checkFavorites, togleFaforite, addRead } from './apiCard';

//import { savedApiData } from './cards';

const READ_NEWS = 'readNews';
const FAIVORIT_NEWS = 'favoriteNews';

const gallery = document.querySelector('.date-block');
const errorRequest = document.querySelector('.errorRequest');

function renderFromLS(key) {
  let favoritNews = loadLS(key);

  let readDate = '0000/00/00';

  if (!favoritNews) {
    // console.log('=============');
    return;
  }
  arrLastData.length = 0;
  // savedApiData.length = 0;
  //savedApiData.push(...favoritNews);
  arrLastData.push(...favoritNews);
  errorRequest.classList.add('visually-hidden');
  gallery.classList.remove('visually-hidden');

  readDate = favoritNews[0].readDate;
  favoritNews.push({ readDate: '0' });
  const tempBlock = [];
  favoritNews.forEach(i => {
    //i.classList.add('inRead');
    if (readDate !== i.readDate) {
      const dateTitle = document.createElement('div');
      dateTitle.innerHTML = `<span class="btn-span">${readDate}</span>
                                    <svg class="icon-down-read-pg" width="15" height="9">
                                         <use href="${icon}#icon-arrow-down"></use>
                                    </svg>`;
      gallery.append(dateTitle);
      const dateBlock = document.createElement('UL');
      dateBlock.classList.add('gallery');
      dateBlock.innerHTML = tempBlock.map(createCard).join('');
      gallery.append(dateBlock);
      readDate = i.readDate;
      tempBlock.length = 0;
    }
    tempBlock.push(i);
  });
  checkFavorites(FAIVORIT_NEWS);
  favoritNews.pop();
  loadLS(READ_NEWS, favoritNews);
}

window.addEventListener('load', () => {
  renderFromLS(READ_NEWS);
});

function lostFavorite() {
  let favoritNews = loadLS(key);
  arrLastData.length = 0;
  arrLastData.push(...favoritNews);
}

const readBlock = document.querySelector('#readNews');
//console.log(readBlock);
readBlock.addEventListener('click', togleFaforite);

//readBlock.addEventListener('click', getFavoriteId);

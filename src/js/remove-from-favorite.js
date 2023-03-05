// import { getFavoriteId } from './add-to-favorite';
// import { removeFromFavorite } from './add-to-favorite';
// import { changeFavoriteBtnText } from './add-to-favorite';
// import { createMarkupFavorite } from './createMarkupFavorite';

const STORAGE_KEY = 'favoriteNews';
const favoriteList = document.querySelector('.gallery');
const iconHeart = new URL('../images/icon.svg', import.meta.url);
console.log('🚀 ~ favoriteList:', favoriteList);

favoriteList.addEventListener('click', getFavoriteId);

function getFavoriteId(evt) {
  if (evt.target.classList.contains('js-is-favorite')) {
    const id = evt.target.closest('.js-card-item').dataset.targetId;

    removeFromFavorite(id);
    location.reload();
    //   createMarkupFavorite()
  }
}

function removeFromFavorite(id) {
  const favoriteBtnText = document.querySelector(
    `li[data-target-id='${id}'] span.js-is-favorite`
  );
  const favoriteBtn = document.querySelector(
    `li[data-target-id='${id}'] button.js-is-favorite`
  );
  const favoriteSvg = document.querySelector(
    `li[data-target-id='${id}'] svg.js-is-favorite`
  );
  const favoriteUse = document.querySelector(
    `li[data-target-id='${id}'] use.js-is-favorite`
  );

  // const removedNewIndex=favoriteNews.findIndex(item => Number(item.id) === Number(id))
  // favoriteNews.splice(removedNewIndex, 1)
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteNews));

  const storageNews = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const removedNewIndex = storageNews.findIndex(
    item => Number(item.id) === Number(id)
  );
  storageNews.splice(removedNewIndex, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageNews));

  favoriteBtnText.classList.replace('js-is-favorite', 'js-tartet-favorite');
  favoriteBtn.classList.replace('js-is-favorite', 'js-tartet-favorite');
  favoriteSvg.classList.replace('js-is-favorite', 'js-tartet-favorite');
  favoriteUse.classList.replace('js-is-favorite', 'js-tartet-favorite');

  changeFavoriteBtnText(favoriteBtnText);
}

function changeFavoriteBtnText(ref) {
  ref.textContent =
    ref.textContent === 'Add to favorite'
      ? 'Remove from favorite'
      : 'Add to favorite';
}

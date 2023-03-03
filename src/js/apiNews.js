// API - KAY=7p9CJylKpjl89QHHczOefIddo1AI47yw;
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const iconHeart = new URL('../images/icon.svg', import.meta.url);

export async function getData(url, timeout) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

export async function makeData(url) {
  try {
    const Data = await getData(url, 2500);

    if (Data.data.status !== 'OK') {
      throw new Error(Data.data.status);
    }

    if (typeof Data.data['response'] !== 'undefined') {
      //  console.log(Data.data.response);
      return Data.data.response.docs;
    }

    return Data.data.results;
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
}

export function createCard(item) {
  const { id, url, title, section, abstract, imgUrl, newDateStr } = item;

  return `
       <li class="card">
        <div class="wrap-image">
          <img
            src="${imgUrl}"
            alt="photo"
           class="wrap-image__photo"
          />
          <p class="wrap-image__text">${section}</p>
          <button type="button" id="${id}" class="wrap-image__btn"><span class="js-favorite-btn-text">Add to favorite</span>
           <svg class="wrap-image__icon" width="16" height="16">
                <use href ='${iconHeart}#icon-heart'></use>
              </svg></button>
        </div>
        <h2 class="card__title">${title}</h2>
        <p class="card__description">${
          abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract
        }</p>
        <div class="wrap-info">
          <p class="wrap-info__time">${newDateStr}</p>
          <a href="${url}" class="wrap-info__link">Read more</a>
        </div>
      </li>
        `;
}

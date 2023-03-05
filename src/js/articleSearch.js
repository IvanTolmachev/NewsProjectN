import {
  makeData,
  createCard,
  dataArticleSearchNormalize,
  arrLastData,
} from './apiNews';
import { articleSearchNews, makeURL } from './apiUrl';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const gallery = document.querySelector('.gallery');
const searhForm = document.querySelector('#search-form');

async function makeArticleSectionNews(url) {
  const weather = document.querySelector('.weather__thumb');
  const sectionHome = document.querySelector('.section_home');
  const errorRequest = document.querySelector('.errorRequest');
  arrLastData.length = 0;
  try {
    const news = await makeData(url);

    arrLastData.push(...news.map(dataArticleSearchNormalize));

    gallery.innerHTML = arrLastData.map(createCard).join('');
    gallery.prepend(weather);
    errorRequest.classList.add('visually-hidden');
    sectionHome.classList.remove('visually-hidden');
  } catch (error) {}
}

searhForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchNews = e.target.searchQuery.value.trim();

  //e.currentTarget.reset();
  //   if (!searchNews) {
  //     Notify.failure(`❌ Нема чого шукати`);
  //     return;
  //   }

  selectedDate = document.querySelector('.calendar-btn-span').textContent;
  selectedDate = selectedDate.trim().split('/').reverse().join('');

  articleSearchNews.params.q = searchNews;
  articleSearchNews.params.page = 200;
  if (/\d{8}/.test(selectedDate))
    articleSearchNews.params['begin_date'] = selectedDate;

  const URL = makeURL(articleSearchNews);
  makeArticleSectionNews(URL);
});

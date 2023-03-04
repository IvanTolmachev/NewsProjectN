import { getCards } from './api_cards';

//  const STORAGE_KEY = 'favoriteNews';
export const savedApiData = [];

async function getApiData() {
  const response = await getCards();
  const data = response.data.results;
  //   console.log(data);
  saveApiData(data);
}

function saveApiData(array) {
  array.map(({ id, url, title, section, abstract, published_date, media }) => {
    const item = {};
    let imgUrl = media.map(media => media['media-metadata'][2].url);
    item['id'] = `${id}`;
    item['url'] = `${url}`;
    item['title'] = `${title}`;
    item['section'] = `${section}`;
    item['abstract'] = `${abstract}`;
    item['published_date'] = `${published_date}`;
    item['imgUrl'] = `${imgUrl}`;
    savedApiData.push(item);

  });
//   console.log('savedApiData', savedApiData);
}
getApiData();
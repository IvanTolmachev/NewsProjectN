import axios from 'axios';

export async function getCards() {
  const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7p9CJylKpjl89QHHczOefIddo1AI47yw`;
  const requestData = await axios.get(URL);
  return requestData;
}

export async function getSearchCards() {
  const URL =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7p9CJylKpjl89QHHczOefIddo1AI47yw';
  const requestData = await axios.get(URL);
  return requestData;
}

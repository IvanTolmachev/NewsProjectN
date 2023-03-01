import axios from 'axios';

const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7p9CJylKpjl89QHHczOefIddo1AI47yw`;

export default async function getCards() {
  const requestData = await axios.get(URL);
  return requestData;
}

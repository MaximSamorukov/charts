const axios = require('axios');
import Papa from 'papaparse';
import csvFile from '../assets/list_2021_01_12.csv';
import { ALPHA_BASE_URL, ALPHA_API_KEY, CORS, NEWSCATCHER_KEY, NEWSCATCHER_BASE, NEWSCATCHER_HOST, NEWSCATCHER_LATEST } from '../constants';
import { filterByExchange } from './filters';

function getList(market) {
  try {
    return (filterByExchange(market).map((i) => [i[0], i[1], i[3]])); // NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS

  } catch (error) {
    console.error(error);
  }
}

async function getQuotes({ ticket, interval, amount }) {
  const stocks = new Stocks(ALPHA_API_KEY);
  const result = await stocks.timeSeries({
    symbol: ticket,
    interval,
    amount
  });
  return result;
}

async function getCompany() {
  try {
    const response = await axios.get(`https://${ALPHA_BASE_URL}/query`, {
      params: {
        function: 'LISTING_STATUS',
        date: '2021-01-12',
        state: 'active',
        apikey: ALPHA_API_KEY
      }
    });
    const data = Papa.parse(response.data)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getNews() {
  try {
    const response = await axios.get(`https://${NEWSCATCHER_BASE}${NEWSCATCHER_LATEST}`, {
      headers: {
        "x-rapidapi-key": NEWSCATCHER_KEY,
        "x-rapidapi-host": NEWSCATCHER_HOST,
        "useQueryString": true
      },
      params: {
        "lang": 'en',
        "topic": 'finance'
      }
    });
    return response.data.articles
  } catch (error) {
    console.error(error);
  }
}

export { getList, getCompany, getNews, getQuotes };


// articles: Array(5)
// 0:
// author: "Sharon Wrobel"
// clean_url: "tipranks.com"
// country: "IS"
// language: "en"
// link: "https://blog.tipranks.com/google-nokia-partner-to-develop-cloud-based-5g-network/"
// published_date: "2021-01-14 16:35:51"
// rank: "64651"
// rights: "tipranks.com"
// summary: "Nokia has teamed up with Google Cloud to develop 5G core network infrastructure and enable business customers to offer a platform for smart retail, automated manufacturing, and other online consumer Read More... The post Google, Nokia Partner To Develop Cloud-Based 5G Network appeared first on TipRanks Financial Blog."
// title: "Google, Nokia Partner To Develop Cloud-Based 5G Network"
// topic: "finance"
// _id: "20915dab2f369d8dbbe29b5a4efbf9a1"
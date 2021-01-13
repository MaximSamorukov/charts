const axios = require('axios');
import Papa from 'papaparse';
import csvFile from '../assets/list_2021_01_12.csv';
import { ALPHA_BASE_URL, ALPHA_API_KEY } from '../constants';
import { filterByExchange } from './filters';

function getList(market) {
  try {
    return (filterByExchange(market).map((i) => [i[0], i[1], i[3]])); // NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS

  } catch (error) {
    console.error(error);
  }
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



export { getList, getCompany };

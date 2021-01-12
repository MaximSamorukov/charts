const axios = require('axios');
import Papa from 'papaparse';
import csvFile from '../assets/list_2021_01_12.csv';

import { ALPHA_BASE_URL, ALPHA_API_KEY } from '../constants';

async function getList() {
  try {
    console.log(csvFile);
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


// params: {
//   'APCA-API-KEY-ID': { ALPACA_CLIENT_ID },
//   'APCA-API-SECRET-KEY': { ALPACA_CLIENT_SECRET }
// }

// params: {
//   response_type: 'code',
//   client_id: ALPACA_CLIENT_ID,
//   redirect_uri: 'https://goofy-curie-94191e.netlify.app/',
//   scope: {
//     account: 'data',
//   }
const axios = require('axios');
import { ALPACA_CLIENT_ID, ALPACA_CLIENT_SECRET, ALPACA_BASE_URL_PAPER, ALPACA_BASE_URL } from '../constants';

async function getUser() {
  try {
    const response = await axios.get(`https://${ALPACA_BASE_URL_PAPER}/v2/account`, {
      headers: {
        'APCA-API-KEY-ID': { ALPACA_CLIENT_ID },
        'APCA-API-SECRET-KEY': { ALPACA_CLIENT_SECRET }
      }
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


export { getUser };



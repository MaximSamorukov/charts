import { initstate } from '../charts';
import { createStore } from 'redux';
import { getNews } from './getApiData';
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_MARKET':
      const { market } = payload;
      return { ...state, market };
    case 'CHANGE_TICKET':
      const { ticket, company } = payload;
      return { ...state, dataAvailable: 'not-available', ticket, company };
    case 'ADD_NEWS':
      const { news } = payload;
      return { ...state, news };
    case 'ADD_CHART_DATA':
      const { dataForCharts } = payload;
      return {
        ...state,
        dataForCharts,
        dataAvailable: 'available',
      };
    case 'CHANGE_INTERVAL':
      const { interval } = payload;
      return { ...state, interval, dataAvailable: 'not-available' };
    case 'CHANGE_AMOUNT':
      const { amount } = payload;
      return { ...state, amount, dataAvailable: 'not-available' };
    case 'TOGGLE_AMOUNT':
      const { ifAmount } = state;
      return { ...state, ifAmount: !ifAmount };
    case 'UPDATE_GRAPH_ON_OPTIONS': {
      const { interval, amount, start, end } = payload;
      return { ...state, interval, amount, start, end, dataAvailable: 'not-available' };
    }
    case 'UPDATE_MARKET_LIST': {
      const { marketList } = payload;
      return { ...state, marketList }
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initstate);
store.subscribe(() => {
  console.log(store.getState());
})
export { store };



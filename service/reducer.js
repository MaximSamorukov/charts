import { initstate } from '../charts';
import { createStore } from 'redux';
import { getNews } from './getApiData';
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_MARKET':
      return { ...state, market: payload.market };
    case 'CHANGE_TICKET':
      return { ...state, ticket: payload.ticket };
    case 'ADD_NEWS':
      const { news } = payload;
      return { ...state, news };
    case 'ADD_CHART_DATA':
      const { dataForCharts } = payload;
      return {
        ...state,
        dataForCharts,
        dataAvailable: 'available',
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

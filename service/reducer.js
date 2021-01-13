import { initstate } from '../charts';
import { createStore } from 'redux';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_MARKET':
      return { ...state, market: payload.market };
    default:
      return state;
  }
}

const store = createStore(reducer, initstate);
store.subscribe(() => {
  console.log(store.getState());
})
export { store };
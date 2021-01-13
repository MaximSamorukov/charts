import { initstate } from '../charts';
import { createStore } from 'redux';

const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case 'CHANGE_MARKET':
      return { ...state, market: payload.market };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
})
export { store };
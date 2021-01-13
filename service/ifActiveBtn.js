import { store } from '../service/reducer';
function ifActiveBtn(name) {
  const { market } = store.getState();
  if (name === market) {
    return 'active';
  }
  return '';
}

export { ifActiveBtn };
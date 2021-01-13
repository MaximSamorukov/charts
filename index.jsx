import React from 'react';
import ReactDOM from 'react-dom';
import { getList } from './service/getApiData';
import Container from './components/component.jsx';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './service/reducer';

// console.log(asr);
// index.js
const App = () => {
  // getList();
  return (
    <>
      <Container name={'news'} />
      <Container name={'list'} />
      <Container name={'graph'} />
    </>
  )
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('main-container'))
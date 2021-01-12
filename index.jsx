import React from 'react';
import { render } from 'react-dom';
import { getList } from './service/getApiData';
// import './styles/styles.css';


// console.log(asr);
// index.js
const App = () => {
  getList();
  return <div>React</div>
};

render(<App />, document.getElementById('container'))
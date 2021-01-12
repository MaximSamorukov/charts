import React from 'react';
import ReactDOM from 'react-dom'
import { getList } from './service/getApiData';
// import './styles/styles.css';


// console.log(asr);
// index.js
const App = () => {
  getList();
  return <div>React</div>
};

ReactDOM.render(<App />, document.getElementById('container'))
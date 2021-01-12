import React from 'react';
import { render } from 'react-dom';
import { getUser } from './service/getApiData';
// import './styles/styles.css';


// console.log(asr);
// index.js
const App = () => {
  getUser();
  return <div>React</div>
};

render(<App />, document.body)
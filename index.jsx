import React from 'react';
import { render } from 'react-dom';
import { asr } from './service/getApiData';
// import './styles/styles.css';
// const asr = require('./service/getApiData');

// console.log(asr);
// index.js
const App = () => <div>{asr.v}</div>;

render(<App />, document.body)
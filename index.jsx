import React from 'react';
import ReactDOM from 'react-dom';
import { getList } from './service/getApiData';
import Container from './components/component.jsx';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

ReactDOM.render(<App />, document.getElementById('main-container'))
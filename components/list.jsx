import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { getList } from '../service/getApiData';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';


export default class List extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    // console.log(store.getState());
    const { market } = store.getState();
    return <div className={'ticket-list-container d-flex flex-column container-fluid addScroll'}>{
      getList(market).map((i) => (
        <div className={'list-string'} key={uuidv4()}>
          <div className={'list-string-fcol'}>{i[0]}</div>
          <div className={'list-string-scol'}>{i[1]}</div>
        </div>
      ))
    }</div>
  }
}
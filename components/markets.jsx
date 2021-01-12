import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';

// NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS
export default class Markets extends React.Component {
  constructor(props) {
    super(props)
  };
  onclick(e) {
    console.log(e.target.textContent);
  }
  render() {
    const { name } = this.props;
    return (
      <div className={`border markets-container d-flex col-12`}>
        <div onClick={this.onclick} className="btn-group container-fluid d-flex justify-content-around flex-nowrap p-0 m-0">
          <button className="btn btn-primary p-1 text-center col-2">NYSE</button>
          <button className="btn btn-primary p-1 text-center col-3">NYSE ARCA</button>
          <button className="btn btn-primary p-1 text-center col-3">NASDAQ</button>
          <button className="btn btn-primary p-1 text-center col-2">NYSE MKT</button>
          <button className="btn btn-primary p-1 text-center col-2">BATS</button>
        </div>
      </div>
    )
  }
}
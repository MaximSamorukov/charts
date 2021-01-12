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
      <div className={`border markets-container d-flex col-12 p-1`}>
        <div onClick={this.onclick} className="btn-group container-fluid">
          <button className="btn btn-primary">NYSE</button>
          <button className="btn btn-primary">NYSE ARCA</button>
          <button className="btn btn-primary">NASDAQ</button>
          <button className="btn btn-primary">NYSE MKT</button>
          <button className="btn btn-primary">BATS</button>
        </div>
      </div>
    )
  }
}
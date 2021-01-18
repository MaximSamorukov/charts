import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { updateMarketList, addChartData, changeMarket } from '../service/action';
import { store } from '../service/reducer';
import { ifActiveBtn } from '../service/ifActiveBtn';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { getList, getQuotes } from '../service/getApiData';

// NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS
class Markets_ extends React.Component {
  constructor(props) {
    super(props)
  };
  onclick(e) {
    store.dispatch(changeMarket(e.target.textContent));
    getList(e.target.textContent).then((data) => {
      store.dispatch(updateMarketList(data));
    });

  }
  render() {
    const { name } = this.props;
    // console.log(this.props);
    return (
      <div className={`border markets-container d-flex col-12`}>
        <div onClick={this.onclick} className="btn-group container-fluid d-flex justify-content-around flex-nowrap p-0 m-0">
          <button className={`btn btn-primary p-1 text-center col-2 ${ifActiveBtn('NYSE')}`}>NYSE</button>
          <button className={`btn btn-primary p-1 text-center col-3 ${ifActiveBtn('NYSE ARCA')}`}>NYSE ARCA</button>
          <button className={`btn btn-primary p-1 text-center col-3 ${ifActiveBtn('NASDAQ')}`}>NASDAQ</button>
          <button className={`btn btn-primary p-1 text-center col-2 ${ifActiveBtn('NYSE MKT')}`}>NYSE MKT</button>
          <button className={`btn btn-primary p-1 text-center col-2 ${ifActiveBtn('BATS')}`}>BATS</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Markets_);
import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { changeInterval, changeAmount, toggleIfAmount, updateGraphOnOptions } from '../service/action';
import { store } from '../service/reducer';
import { ifActiveBtn } from '../service/ifActiveBtn';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { ALPHA_API_KEY } from '../constants';
import { v4 as uuidv4 } from 'uuid';

// NYSE, NYSE ARCA, NASDAQ, NYSE MKT, BATS
class Filter_ extends React.Component {
  constructor(props) {
    super(props)
  };
  onchange(e) {
    if (e.target.name === "onAmountIntervals" || e.target.name === "onDateInteval") {
      store.dispatch(toggleIfAmount());
    }
  }

  onsubmit(e) {
    e.preventDefault();
    // console.log(e.target.children[2].value);
    const interval = e.target.children[0].value;
    const amount = parseInt(e.target.children[2].value) || store.getState().amount;
    const start = new Date(e.target.children[5].value);
    const end = new Date(e.target.children[7].value);
    const payload = {
      interval,
      amount,
      start,
      end
    };
    console.log(payload);
    // const { value } = e.target[0];
    // if (Number.isInteger(parseInt(value)) && Number.isInteger(parseInt(value)) > 0) {
    //   console.log(parseInt(value));
    store.dispatch(updateGraphOnOptions(payload));
    // } else {
    //   console.log(e.target[0].value);
    // }
  }

  render() {
    const { interval, ifAmount, amount } = this.props;
    const { INTERVALS } = window.Stocks.prototype;
    // console.log(window);
    // console.log(INTERVALS);
    return (
      <div className="form-container input-group input-group-sm mb-3 container-fluid d-flex ">
        <form onSubmit={this.onsubmit} onChange={this.onchange}>
          <select className="custom-select-sm" id="inputGroupSelect01">
            {INTERVALS.map((i) => {
              if (i === interval) {
                return <option key={uuidv4()} selected value={i}>{i}</option>
              }
              return <option key={uuidv4()} value={i}>{i}</option>
            })}
          </select>
          <input checked={ifAmount} type="radio" name="onAmountIntervals" id="onAmountIntervals" />
          <input disabled={!ifAmount} size="2" type="text" placeholder="Intervals" id="intervals" name="intervals" />
          <input checked={!ifAmount} type="radio" name="onDateInteval" id="onDateInteval" />
          <label htmlFor="from">From:</label>
          <input disabled={ifAmount} type="date" id="from" name="from" />
          <label htmlFor="to">To:</label>
          <input disabled={ifAmount} type="date" id="to" name="to" />
          <button type="submit" id="btn-intervals">Get data</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Filter_);
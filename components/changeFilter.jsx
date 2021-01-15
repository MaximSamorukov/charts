import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { changeInterval } from '../service/action';
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
    store.dispatch(changeInterval(e.target.value));
  }
  render() {
    const { interval } = this.props;
    const { INTERVALS } = window.Stocks.prototype;
    console.log(window);
    console.log(INTERVALS);
    return (
      <div className="input-group mb-3">
        Inteval:
        <select onChange={this.onchange} className="custom-select" id="inputGroupSelect01">
          {INTERVALS.map((i) => {
            if (i === interval) {
              return <option key={uuidv4()} selected value={i}>{i}</option>
            }
            return <option key={uuidv4()} value={i}>{i}</option>
          })}
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Filter_);
import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { getList, getQuotes } from '../service/getApiData';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { changeTicket } from '../service/action';
import createOptions from '../service/createObjectForChart';
import { addChartData } from '../service/action';

class List_ extends React.Component {
  constructor(props) {
    super(props)
  };

  onclick(e) {
    // console.log(this);
    const ticket = e.currentTarget.children[0].textContent.split(',')[0];
    const company = e.currentTarget.children[1].textContent;
    store.dispatch(changeTicket({ ticket, company }));
    // getQuotes(this.props).then((data) => {
    //   console.log(data);
    //   store.dispatch(addChartData(createOptions(data)));
    // })
  }
  render() {
    const { market } = store.getState();
    return <div className={'ticket-list-container d-flex flex-column container-fluid addScroll'}>{
      getList(market).map((i) => (
        <div onClick={this.onclick} className={'list-string'} key={uuidv4()}>
          <div className={'list-string-fcol'}>{i[0]}, {i[2]}</div>
          <div className={'list-string-scol'}>{i[1]}</div>
        </div>
      ))
    }</div>
  }
}

export default connect(mapStateToProps, null)(List_);
import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { getNews } from '../service/getApiData';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { getNewsRequest } from '../service/getNewsRequest';


class News_ extends React.Component {
  constructor(props) {
    super(props)
  };

  onclick(e) {
    // store.dispatch(changeTicket(e.currentTarget.children[0].textContent.split(',')[0]));
  }
  render() {
    (getNews(getNewsRequest()));
    return <div className={'news-list-container d-flex flex-column container-fluid addScroll'}>fdf</div>
  }
}

export default connect(mapStateToProps, null)(News_);

// getNews(getNewsRequest()).map((i) => (
//   <div onClick={this.onclick} className={'list-string'} key={uuidv4()}>
//     <div className={'list-string-fcol'}>{i[0]}, {i[2]}</div>
//     <div className={'list-string-scol'}>{i[1]}</div>
//   </div>
// ))
import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { getNews } from '../service/getApiData';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { getNewsRequest } from '../service/getNewsRequest';


class NewsItem_ extends React.Component {
  constructor(props) {
    super(props)
  };

  onclick(e) {
    // store.dispatch(changeTicket(e.currentTarget.children[0].textContent.split(',')[0]));
  }
  render() {
    // (getNews(getNewsRequest()));
    return <div className={'news-list-item d-flex container-fluid'}>{this.props.data}</div>
  }
}

export default connect(mapStateToProps, null)(NewsItem_);
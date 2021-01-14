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
    const { author, link, published_date, summary, title, topic } = this.props.data;
    return <div className={'news-list-item d-flex container-fluid'}>
      <div className={'d-flex m-0 p-0 container-fluid justify-content-between'}>
        <div className={'news-item-title'}><a href={link}>{title}</a></div>
        <div className={'news-item-date'}>{new Date(Date.parse(published_date)).toDateString()}</div>
      </div>
      <div className={'news-item-author'}>{`Author: ${author || '-'}`}</div>
      <div className={'news-item-sum'}>{summary}</div>
    </div>
  }
}

export default connect(mapStateToProps, null)(NewsItem_);
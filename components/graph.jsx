import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { getQuotes } from '../service/getApiData';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { getNewsRequest } from '../service/getNewsRequest';
import NewsItem from './newsItem.jsx';
import { addData } from '../service/action';

class Graph_ extends React.Component {
  constructor(props) {
    super(props)
  };

  // componentDidMount() {

  // }

  render() {
    getQuotes().then((data) => {
      console.log(data);
    })
    return <div className={'news-list-container d-flex flex-column container-fluid addScroll'}>
      Graph
    </div>
  }
}

export default connect(mapStateToProps, null)(Graph_);

// articles: Array(5)
// 0:
// author: "Sharon Wrobel"
// clean_url: "tipranks.com"
// country: "IS"
// language: "en"
// link: "https://blog.tipranks.com/google-nokia-partner-to-develop-cloud-based-5g-network/"
// published_date: "2021-01-14 16:35:51"
// rank: "64651"
// rights: "tipranks.com"
// summary: "Nokia has teamed up with Google Cloud to develop 5G core network infrastructure and enable business customers to offer a platform for smart retail, automated manufacturing, and other online consumer Read More... The post Google, Nokia Partner To Develop Cloud-Based 5G Network appeared first on TipRanks Financial Blog."
// title: "Google, Nokia Partner To Develop Cloud-Based 5G Network"
// topic: "finance"
// _id: "20915dab2f369d8dbbe29b5a4efbf9a1"
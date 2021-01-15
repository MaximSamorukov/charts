import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import { store } from '../service/reducer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps } from '../service/mapStatetoProps';
import { getNewsRequest } from '../service/getNewsRequest';
import NewsItem from './newsItem.jsx';
import { addChartData } from '../service/action';
import Chart from './chartComponent.jsx';
import Filter from './changeFilter.jsx';
import { getQuotes } from '../service/getApiData';
import createOptions from '../service/createObjectForChart';

class Graph_ extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidUpdate() {
    const { dataAvailable } = this.props;
    if (dataAvailable === 'not-available') {
      getQuotes(this.props).then((item) => {
        store.dispatch(addChartData(createOptions({ item, store: this.props })));
      })
    }
  }

  render() {
    const { dataAvailable } = this.props;
    if (dataAvailable === 'not-available') {
      return <div className={'graph-list-container d-flex flex-column container-fluid addScroll'}>
        We are getting the data...
    </div>
    }
    return <div className={'graph-list-container d-flex flex-column container-fluid addScroll'}>
      <Filter />
      <Chart />
    </div>
  }
}

export default connect(mapStateToProps, null)(Graph_);

import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';
import Markets from './markets.jsx';
import List from './list.jsx';
import News from './news.jsx';

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const { name } = this.props;
    if (name === 'list') {
      return (
        <div className={`border d-flex flex-column col-sm-${layout(name)} col-12`}><Markets /><List /></div>
      )
    };
    if (name === 'news') {
      return (
        <div className={`border d-flex flex-column col-sm-${layout(name)} col-12`}><News /></div>
      )
    };
    return (
      <div className={`border d-flex flex-column col-sm-${layout(name)} col-12`}>{name}</div>
    )
  }
}
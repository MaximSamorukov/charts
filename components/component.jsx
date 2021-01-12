import React from 'react';
import ReactDOM from 'react-dom';
import { layout } from '../service/layoutCreater';


export default class Container extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const { name } = this.props;
    return (
      <div className={`border col-sm-${layout(name)} col-12`}>{name}</div>
    )
  }
}
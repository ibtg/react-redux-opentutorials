import DisplayNumber from '../components/DisplayNumber';
import React, { Component } from 'react';
import store from '../store';

export default class extends Component {
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    // state가 바뀔 때 마다 아래 함수가 실행된다
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
